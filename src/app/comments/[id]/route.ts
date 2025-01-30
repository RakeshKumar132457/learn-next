import { comments } from "../data";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  // return Response.json(comment);
  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const body = await request.json();
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  comments[commentIndex].text = body.text;
  return Response.json(comments[commentIndex]);
};

export const DELETE = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  const deletedComment = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
};
