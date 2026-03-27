"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Комплексный уход",
      description: "Стрижка, мытьё, сушка, чистка ушей, когти",
      price: "от 50€",
    },
    {
      title: "Стрижка",
      description: "Модельная или гигиеническая стрижка",
      price: "от 30€",
    },
    {
      title: "Купание + сушка",
      description: "Профессиональная косметика и сушка",
      price: "от 20€",
    },
    {
      title: "Когти и уши",
      description: "Стрижка когтей и чистка ушей",
      price: "от 10€",
    },
    {
      title: "Экспресс линька",
      description: "Удаление подшёрстка",
      price: "от 25€",
    },
    {
      title: "Тримминг",
      description: "Для жесткошерстных пород",
      price: "от 40€",
    },
  ];

  return (
    <section id="services" className="px-6 py-24 flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg/hero-bg.jpg')" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Glass container layer */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/50 border border-white/50 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16">
          <h2 className="text-3xl text-center mb-12">Услуги</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative glass border border-white/20 rounded-2xl p-6 shadow-lg transition overflow-hidden"
              >
                {/* Shine */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60" />

                <h3 className="text-lg mb-2 font-medium">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="text-lg font-semibold">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}