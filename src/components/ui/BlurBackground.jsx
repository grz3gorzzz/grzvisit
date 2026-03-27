"use client";
import { motion } from "framer-motion";

export default function BlurBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Pink */}
      <motion.div
        animate={{ x: [0, 120, -60, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-pink-300/30 blur-3xl opacity-70 rounded-full top-[-150px] left-[-150px]"
      />

      {/* Blue */}
      <motion.div
        animate={{ x: [0, -100, 60, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-blue-300/30 blur-3xl opacity-70 rounded-full bottom-[-150px] right-[-150px]"
      />

      {/* Peach */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 35, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-orange-200/30 blur-3xl opacity-60 rounded-full bottom-[20%] left-[30%]"
      />
    </div>
  );
}