import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isLogin = false;

  if (!isLogin && path !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
