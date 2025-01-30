import React from "react";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      {children}
      {users}
      {revenue}
      {notifications}
    </>
  ) : ( 
    <>{login}</>
  );
};

export default ComplexDashboardLayout;
