import { redirect } from "next/navigation";

export const GET = () => {
  redirect("/dashboard/api/v2/users")
  return Response.json({
    version: "v1",
    data: {
      user_count: 100,
      user_active: 80,
    },
  });
};
