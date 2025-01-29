"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const ReviewError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      <div>{error.message}</div>
      <button
        onClick={() => {
          reload();
        }}
      >
        Try again
      </button>
    </>
  );
};

export default ReviewError;
