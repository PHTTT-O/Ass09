"use client"

import { useState } from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg cursor-pointer transition 
      ${isHover ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"}`}
      
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {children}
    </div>
  );
}