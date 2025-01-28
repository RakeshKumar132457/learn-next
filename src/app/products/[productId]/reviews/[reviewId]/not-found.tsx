"use client";

import { usePathname } from "next/navigation";

const ReviewNotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      Review ID #{reviewId} not found for product id {productId}
    </div>
  );
};

export default ReviewNotFound;
