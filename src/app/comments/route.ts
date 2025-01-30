import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers } from "next/headers";

export const GET = async (request: NextRequest) => {

  const headersList = await headers()
  const apiKey = headersList.get('x-api-key')

  const reqHeaders = new Headers(request.headers)
  const sameApiKey = reqHeaders.get('x-api-key')

  console.log(apiKey, sameApiKey)

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
};

export const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
};
