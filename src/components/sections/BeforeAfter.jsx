"use client";

import { useState } from "react";

export default function BeforeAfter({ before, after }) {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl text-center mb-8">До / После</h2>

      <div
        className="relative w-full h-[700px] overflow-hidden rounded-3xl cursor-ew-resize"
        onMouseMove={handleMove}
      >
        {/* After */}
        <img
          src={after}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* Before */}
        <img
          src={before}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          alt=""
        />

        {/* Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${position}%` }}
        />
      </div>
    </section>
  );
}