import { NextResponse } from "next/server";

const middleware = (req) => {
  const token = req.cookies.get("token")?.value;
  const admin = req.cookies.get(process.env.ADMIN_VALUE)?.value;

  const path = req.nextUrl.pathname;
  const isAdminPath = path.startsWith("/admin");

  if (path === "/signup" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (path === "/signin" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isAdminPath && admin) {
    return NextResponse.next(); // ✅ Let admin proceed to admin route
  }

  if (isAdminPath && token) {
    return NextResponse.redirect(new URL("/", req.url)); // ❌ Not admin
  }

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/signin", req.url)); // ❌ Not logged in
  }

  return NextResponse.next(); // ✅ Allow other routes
};

export default middleware;
