// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (pathname === '/shop' || pathname === '/jobs' || pathname === '/messages') {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/shop', '/jobs'],
}