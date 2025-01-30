import React, { use } from "react";

const PhotoModal = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return (
    <>
      <div>Photo {id} (Model view)</div>
      <p>This is intercepted route</p>
    </>
  );
};

export default PhotoModal;
