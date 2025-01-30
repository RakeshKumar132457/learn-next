import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = await headers();
  const cookieStore = await cookies();
  const apiKey = headersList.get("x-api-key");
  cookieStore.set("perPage", "10");

  const reqHeaders = new Headers(request.headers);
  const sameApiKey = reqHeaders.get("x-api-key");

  const theme = request.cookies.get("theme");

  console.log("Headers: ", apiKey, sameApiKey);
  console.log("Cookies: ", theme, cookieStore.get("perPage"));

  return new Response(JSON.stringify({ key: apiKey }), {
    headers: { "Content-Type": "application/json", "Set-Cookie": "theme=dark" },
  });
}
