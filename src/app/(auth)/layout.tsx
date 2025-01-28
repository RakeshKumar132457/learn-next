import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Auth layout</header>
      {children}
    </div>
  );
};

export default AuthLayout;
