import { type NextRequest, NextResponse } from 'next/server'
import { Routes } from './shared/routes'

const publicRoutes = [Routes.Landing]
const authRoutes = [Routes.SignIn, Routes.SignOn]

export function proxy(req: NextRequest) {
  const { nextUrl } = req

  const isAuthenticated = !!req.cookies.get('better-auth.session_token')?.value

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isAuthRoute) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(Routes.Home, nextUrl))
    }

    return NextResponse.next()
  }

  if (!isAuthenticated && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname

    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    return NextResponse.redirect(
      new URL(`${Routes.SignIn}?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
