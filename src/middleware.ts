import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const { pathname } = request.nextUrl;

    if (!session) {
        if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth')) {
            return new NextResponse(
                JSON.stringify({ success: false, message: "request authentication" }),
                {
                    status: 401,
                    headers: { 'content-type': 'application/json' }
                }
            );
        }

        if (pathname.startsWith('/account')) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (pathname.match(/\/api\/users\/([^\/]+)/)) {
        const userId = pathname.split('/')[3];

        if (session?.user.id !== userId) {
            return new NextResponse(
                JSON.stringify({ success: false, message: "unauthorized" }),
                {
                    status: 403,
                    headers: { 'content-type': 'application/json' }
                }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    runtime: "nodejs",
    matcher: [
        '/account',
        '/api/:path*',
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)'
    ]
};