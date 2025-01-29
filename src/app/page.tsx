'use client'
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [shouldError, setShouldError] = useState(false)
  
  if (shouldError) {
    throw new Error('Test')
  }
  return (
    <>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
       <button onClick={() => setShouldError(true)}>
        Trigger Error
      </button>
    </>
  );
};
export default Home;
