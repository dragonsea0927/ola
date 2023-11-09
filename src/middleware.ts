import { NextResponse, NextRequest } from "next/server"

export default function middleware(req: NextRequest) {
  // const isLoggedIn = !!req.cookies.get('token')
  // console.log(isLoggedIn, 'isLoggedIn');
  // const isOnAdminPage = req.nextUrl?.pathname.startsWith('/admin');
  // console.log(isOnAdminPage, 'isOnAdminPage');

  // if (isOnAdminPage) {
  //   if (isLoggedIn) return NextResponse.next()
  //   return NextResponse.redirect(new URL('/auths/signin', req.nextUrl))
  // } else if (isLoggedIn) {
  //   return NextResponse.redirect(new URL('/admin', req.nextUrl))
  // }
  return NextResponse.next()
}


export const config = {
  // matcher: ['/admin/:path*',],
  // matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
}