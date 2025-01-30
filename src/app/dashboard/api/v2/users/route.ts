export const GET = () => {
  return Response.json({
    version: "v2",
    data: {
      user_count: 100,
      user_active: 80,
      user_rejected: 10,
      user_inactive: 10
    },
  });
};
