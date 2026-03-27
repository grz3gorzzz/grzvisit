"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Анна",
      text: "Очень аккуратная стрижка, собака выглядит прекрасно! Спасибо большое, обязательно придём ещё.",
      avatar: "/images/review1.jpg",
    },
    {
      name: "Мария",
      text: "Лучший грумер, у которого мы были. Очень бережное отношение к животным.",
      avatar: "/images/review2.jpg",
    },
    {
      name: "Ольга",
      text: "После комплексного ухода собака как с выставки. Очень рекомендую!",
      avatar: "/images/review3.jpg",
    },
  ];

  return (
    <section id="reviews" className="px-6 py-24 flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg/reviews-bg.jpg')" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        {/* Glass container */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/50 border border-white/50 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16">
          <h2 className="text-3xl text-center mb-12">
            Отзывы клиентов
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="relative glass border border-white/30 rounded-2xl p-6 shadow-lg overflow-hidden"
              >
                {/* Shine */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60" />

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    className="w-12 h-12 rounded-full object-cover"
                    alt=""
                  />
                  <div className="font-semibold">
                    {review.name}
                  </div>
                </div>

                <p className="text-gray-700 text-sm">
                  {review.text}
                </p>

                <div className="mt-4 text-yellow-400">
                  ★★★★★
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}