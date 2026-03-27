"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      
      {/* Фоновая картинка с легкой анимацией */}
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-70 rounded-3xl"
        style={{ backgroundImage: "url('/images/bg/her-bg.jpg')" }}
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      {/* Liquid glass слой */}
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl bg-white/10 rounded-3xl"></div>

      {/* Контент */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-6"
        >
          Профессиональный груминг
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          Уход, стрижка и забота о вашем питомце. 
          Работаю бережно и с любовью к животным.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl glass border border-white/30 shadow-lg hover:scale-105 transition"
          >
            Записаться
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/20 hover:scale-105 transition"
          >
            Посмотреть работы
          </a>
        </motion.div>
      </div>
    </section>
  );
}