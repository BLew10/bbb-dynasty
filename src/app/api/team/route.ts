import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { Team } from "@/types";
import { SESSION_COOKIE_NAME } from "@/constants";

export async function GET() {
  try {
    let teams = await prisma.team.findMany();
    const teamsData: Team[] = teams.map((team) => {
      return {
        id: team.id,
        name: team.name,
        mainColor: team.mainColor,
        secondaryColor: team.secondaryColor,
        shortName: team.shortName,
        player: null,
      };
    })

    return NextResponse.json({ teams: teamsData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error)?.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { teamId } = await request.json();
    const code = request.cookies.get(SESSION_COOKIE_NAME)?.value;

    if (!code) {
      console.log("Invalid player code");
      return NextResponse.json({ message: "Invalid player code" }, { status: 404 });
    }

    const player = await prisma.player.findFirst({
      where: { code },
      include: { team: true },
    });

    if (!player) {
      console.log("Player not found");
      return NextResponse.json({ message: "Player not found" }, { status: 404 });
    }

    const newTeam = await prisma.team.findFirst({
      where: { id: teamId },
      include: { Player: true },
    });

    if (!newTeam) {
      console.log("Team not found");
      return NextResponse.json({ message: "Team not found" }, { status: 404 });
    }

    if (newTeam.Player && newTeam.Player.id !== player.id) {
      console.log("Team already has been assigned");
      return NextResponse.json({ message: "Team already has been chosen dumbass" }, { status: 400 });
    }

    console.log("Starting transaction to update player and team");

    const updatedData = await prisma.$transaction(async (prisma) => {
      if (player.teamId) {
        // Unassign the player from the current team
        await prisma.team.update({
          where: { id: player.teamId },
          data: { playerId: null },
        });
      }

      const updatedPlayer = await prisma.player.update({
        where: { id: player.id },
        data: { teamId: newTeam.id },
      });

      const updatedTeam = await prisma.team.update({
        where: { id: newTeam.id },
        data: { playerId: updatedPlayer.id },
      });

      return { updatedPlayer, updatedTeam };
    });

    console.log("Transaction completed", updatedData);

    return NextResponse.json({ player: updatedData.updatedPlayer, team: updatedData.updatedTeam }, { status: 200 });
  } catch (error) {
    console.error("Error during POST method:", error);
    return NextResponse.json({ message: (error as Error)?.message }, { status: 500 });
  }
}