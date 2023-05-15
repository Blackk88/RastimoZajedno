import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";

import { i18n } from "../i18n-config";

function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const negotiator = new Negotiator({ headers: negotiatorHeaders });

  // @ts-ignore
  const locales: string[] = i18n.locales;

  const locale = negotiator.language(locales);
  return locale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|.next/static|.next/image|assets|favicon.ico|sw.js).*)",
  ],
};
