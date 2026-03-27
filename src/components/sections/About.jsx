"use client";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <GlassCard>
          <h2 className="text-2xl mb-4">Обо мне</h2>
          <p className="text-slate-700">
            Занимаюсь профессиональным грумингом с 2022 года
          </p>
        </GlassCard>
      </motion.div>
    </section>
  );
}
