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
      return NextResponse.json(
        { message: "Invalid player code" },
        { status: 404 }
      );
    }

    const team = await prisma.team.findFirst({
      where: {
        id: teamId,
      },
    });

    if (team?.playerId) {
      return NextResponse.json(
        { message: "Team already has been assigned" },
        { status: 400 }
      );
    }

    const updatedPlayer = await prisma.player.update({
      where: {
        code,
      },
      data: {
        team: {
          connect: {
            id: teamId,
          },
        },
      },
    });
    
    return NextResponse.json({ player: updatedPlayer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error)?.message },
      { status: 500 }
    );
  }
}
