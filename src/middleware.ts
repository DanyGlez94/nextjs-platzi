import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/login/:path', '/signup/:path'],
};

export function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const accesstoken = cookiesStore.get('accesstoken')?.value;

  if (accesstoken) {
    return NextResponse.redirect(new URL('/store', request.url));
  }
}
