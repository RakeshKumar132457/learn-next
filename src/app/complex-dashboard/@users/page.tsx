'use client'
import React, { useState } from "react";

const UserSlot = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>User slot</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
};

export default UserSlot;
