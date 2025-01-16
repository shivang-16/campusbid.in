import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = getTokenFromStorage(request);

 // Update the isPublicPath condition
const isPublicPath = path === "/"; // Only allow access to the root route

if (token && isPublicPath) {
  return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
}

if (!token && !isPublicPath) {
  return NextResponse.redirect(new URL("/", request.nextUrl));
}
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
  ],
};
