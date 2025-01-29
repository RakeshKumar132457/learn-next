import { redirect } from "next/navigation";
import React, { use } from "react";

const Review = ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  const resovleParams = use(params);
  // if (Math.floor(Math.random() * 2) === 1) {
  //   throw new Error(`There isn't any review`);
  // }
  if (parseInt(resovleParams?.reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <div>{`Review #${resovleParams.reviewId} for product ${resovleParams.productId}`}</div>
  );
};

export default Review;
