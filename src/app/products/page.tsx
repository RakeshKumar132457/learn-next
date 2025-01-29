import Link from "next/link";
import React from "react";

const Product = () => {
  const productId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  return (
    <div>
      <h1>Product list</h1>
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <Link href="/products/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/products/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/products/3" replace>
        <h2>Product 3</h2>
      </Link>
      <Link href={`/products/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </div>
  );
};

export default Product;
