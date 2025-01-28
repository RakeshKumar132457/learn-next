import React, { use } from "react";

const ProductDetails =  ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const resolvedParams = use(params);
  return <div>{`Details about ${resolvedParams.productId}`}</div>;
};

export default ProductDetails;
