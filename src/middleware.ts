import { NextResponse, NextRequest } from "next/server"

export default function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies?.getAll()?.some(cookie => cookie.name === 'next-auth.session-token') ?? false;
  const isOnAdminPage = req.nextUrl?.pathname.startsWith('/admin');

  if (isOnAdminPage) {
    if (isLoggedIn) return NextResponse.next()
    return NextResponse.redirect(new URL('/auths/signin', req?.nextUrl))
  } else if (isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }
  return NextResponse.next()
}


export const config = {
  matcher: ['/admin/:path*',],
}