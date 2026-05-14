import { NextResponse, type NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/',
  '/sign-in',
  '/sign-up',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
];

const PUBLIC_PREFIXES = [
  '/api/auth',
  '/_next',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/english',
  '/ielts',
  '/toefl',
  '/pte',
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // Fast cookie check; full session validation happens in route handlers.
  const sessionCookie =
    req.cookies.get('better-auth.session_token') ?? req.cookies.get('__Secure-better-auth.session_token');

  if (!sessionCookie) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ code: 'unauthorized', message: 'Auth required' }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = '/sign-in';
    url.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(url);
  }

  // Admin routes get an additional gate (full role check happens server-side).
  if (pathname.startsWith('/admin')) {
    // Pass through; the layout will verify role and redirect if needed.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
