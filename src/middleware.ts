// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { SESSION_COOKIE_NAME } from "./constants";

export function middleware(req: NextRequest) {
    const { cookies } = req;

    const isApi = req.nextUrl.pathname.startsWith("/api");

    const authorization = cookies.get(SESSION_COOKIE_NAME)?.value;
    if (authorization && req.nextUrl.pathname == "/") {
        const teamsUrl = new URL("/players", req.url);
        req.nextUrl.pathname = teamsUrl.pathname;
        return NextResponse.redirect(req.nextUrl);
    }

    console.log(!authorization && req.nextUrl.pathname !== "/" && !isApi);
    if (!authorization && req.nextUrl.pathname !== "/" && !isApi) {
        const loginUrl = new URL("/", req.url);
        req.nextUrl.pathname = loginUrl.pathname;
        return NextResponse.redirect(req.nextUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/teams',
        '/api/team',
        '/api/player',
        '/players',
    ],
};
