import { NextRequest, NextResponse } from "next/server";

const middelware = (request: NextRequest) => {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
  // return NextResponse.redirect(new URL("/hello", request.url));
};

// export const config = {
//   matcher: ["/profile", "/products/:path*"],
// };

export default middelware;