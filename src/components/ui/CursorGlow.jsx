"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: pos.x - 100,
        top: pos.y - 100,
      }}
    >
      <div className="w-[200px] h-[200px] bg-purple-300/20 rounded-full blur-3xl" />
    </div>
  );
}