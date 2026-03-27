import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="glass border border-white/30 shadow-xl rounded-3xl"
    >
      <div className="p-6">{children}</div>
    </motion.div>
  );
}