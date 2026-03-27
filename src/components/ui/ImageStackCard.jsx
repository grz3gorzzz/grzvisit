"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ImageStackCard({ images = [], title = "" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateX(((y / rect.height) - 0.5) * -10);
    setRotateY(((x / rect.width) - 0.5) * 10);
  };

  const resetTilt = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  return (
    <>
      {/* Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        whileHover={{ scale: 1.03 }}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
        className="relative cursor-pointer overflow-hidden rounded-[28px] backdrop-blur-2xl bg-white/25 border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-200"
        onClick={() => setOpen(true)}
      >
        {/* Images stack */}
        <div className="flex flex-col h-[650px] gap-3 p-3">
          {images.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Glass shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60" />

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end p-5">
          <div className="text-white text-lg">{title}</div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-2xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[active]}
                alt=""
                className="w-full h-[75vh] object-cover rounded-3xl shadow-2xl"
              />

              {/* Controls */}
              <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/30"
              >
                ←
              </button>

              <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/30"
              >
                →
              </button>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setActive(i)}
                    className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition ${
                      active === i
                        ? "ring-2 ring-white"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}