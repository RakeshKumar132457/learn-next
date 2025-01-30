import React, { ReactNode } from "react";

const PhotoFeedLayout = ({
  children,
  modal,
  dashboard,
}: {
  children: ReactNode;
  modal: ReactNode;
  dashboard: ReactNode;
}) => {
  return (
    <>
      <div>Photo feed</div>
      {modal}
      <div>
        {children}
        {dashboard}
      </div>
    </>
  );
};

export default PhotoFeedLayout;
