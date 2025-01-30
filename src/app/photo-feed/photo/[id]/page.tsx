import React, { use } from "react";

const PhotoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return (
    <>
      <div>Photo {id} (Model view)</div>
      <p>This is full page</p>
    </>
  );
};

export default PhotoPage;
