"use client";

import { motion } from "framer-motion";

export default function ImageCard({ src, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative overflow-hidden rounded-3xl glass border border-white/20 shadow-xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="p-5">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}