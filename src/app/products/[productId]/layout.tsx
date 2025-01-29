import React from "react";

export const metadata = {
  title: "Product page",
};


const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  if (Math.floor(Math.random() * 2) === 1) {
    throw new Error(`There isn't any product`);
  }
  return (
    <div>
      <main>{children}</main>
      <div>Featured Layout</div>
    </div>
  );
};

export default ProductLayout;
