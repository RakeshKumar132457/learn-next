import React, { use } from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const id = (await params).productId;
  return {
    title: { absolute: `Product ${id}` },
  };
};

const ProductDetails = ({ params }: Props) => {
  const resolvedParams = use(params);
  return <div>{`Details about ${resolvedParams.productId}`}</div>;
};

export default ProductDetails;
