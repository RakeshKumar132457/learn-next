import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Main layout</header>
      {children}
    </div>
  );
};

export default MainLayout;
