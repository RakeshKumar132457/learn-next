import React from "react";

export const metadata = {
  title: "Product page",
};


const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      <div>Featured Layout</div>
    </div>
  );
};

export default ProductLayout;
