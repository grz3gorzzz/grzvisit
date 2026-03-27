"use client";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
  <div className="backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl p-10 shadow-xl text-center">
    <h2 className="text-2xl mb-4">Записаться на груминг</h2>
    <p className="mb-6 text-gray-600">
      Напишите в WhatsApp или Telegram
    </p>

    <div className="flex justify-center gap-4">
      <button className="px-6 py-3 rounded-2xl bg-black text-white">
        WhatsApp
      </button>
      <button className="px-6 py-3 rounded-2xl glass border">
        Telegram
      </button>
    </div>
  </div>
</section>
  );
}