import Link from "next/link";
import React from "react";

const PhotoFeed = () => {
  return (
    <>
      <h2>Photo</h2>
      <Link href="/photo-feed/photo/1">Photo 1</Link>
      <Link href="/photo-feed/photo/2">Photo 2</Link>
    </>
  );
};

export default PhotoFeed;
