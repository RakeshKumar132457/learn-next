import { notFound } from "next/navigation";
import React, { use } from "react";

const Review = ({ params }: { params: Promise<{ reviewId: string, productId: string }> }) => {
  const resovleParams = use(params);
  if(parseInt(resovleParams?.reviewId) > 1000){
    notFound();
  }
  return <div>{`Review #${resovleParams.reviewId} for product ${resovleParams.productId}`}</div>;
};

export default Review;
