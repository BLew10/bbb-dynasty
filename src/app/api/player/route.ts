import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { SESSION_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    console.log(code);
    const player = await prisma.player.findFirst({
      where: {
        code,
      },
    });

    console.log(player);

    if (!player) {
      return NextResponse.json(
        { message: "Invalid player code" },
        { status: 404 }
      );
    }

    const response = NextResponse.json({ player }, { status: 200 });
    response.cookies.set(SESSION_COOKIE_NAME, player.code, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: (error as Error)?.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const players = await prisma.player.findMany({
      include: {
        team: true,
      }
    });

    const code = request.cookies.get(SESSION_COOKIE_NAME)?.value;


    return NextResponse.json({ players, code }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error)?.message },
      { status: 500 }
    );
  }
}
