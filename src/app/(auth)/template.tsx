"use client";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <header>Auth layout</header>
      {navLinks.map((item) => {
        return (
          <>
            <Link href={item.href} key={item.href}>
              {item.name}
            </Link>
          </>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
