import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = getTokenFromStorage(request);

  // Update the isPublicPath condition
  const isPublicPath = path === "/" ||
    path === "/login" ||
    path === "/signup"; // Only allow access to the root route

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl)); // Redirect to dashboard if token exists
  }

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.nextUrl)); // Redirect to root if no token and not a public path
  }

  return NextResponse.next();

}

function getTokenFromStorage(request: NextRequest) {
  const cookies = request.cookies;
  // console.log("====cookies are coming here =======>",cookies, "===========>")
  const token = cookies.get("token");
  return token;
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/login",
    "/signup",
  ],
};
