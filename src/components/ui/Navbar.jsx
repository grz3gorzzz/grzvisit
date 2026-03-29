"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`
            glass w-full rounded-2xl max-w-5xl px-6 py-3
            flex items-center justify-between
            transition-all duration-500
            ${scrolled ? "bg-white/30 shadow-lg border-white/40" : "bg-white/10 border-white/20"}
          `}
          style={{
            backdropFilter: scrolled
              ? "blur(24px) saturate(180%)"
              : "blur(18px) saturate(160%)",
            WebkitBackdropFilter: scrolled
              ? "blur(24px) saturate(180%)"
              : "blur(18px) saturate(160%)"
          }}
        >
          {/* Logo */}
          <Link href="/" className="font-semibold text-lg">
            Grooming
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-sm items-center">
            <Link href="/#about" className="hover:opacity-60 transition">
              Обо мне
            </Link>
            <Link href="/#projects" className="hover:opacity-60 transition">
              Работы
            </Link>
            <Link href="/#services" className="hover:opacity-60 transition">
              Услуги
            </Link>
            <Link href="/#reviews" className="hover:opacity-60 transition">
              Отзывы
            </Link>
            <Link href="/#contact" className="hover:opacity-60 transition">
              Контакты
            </Link>

            <Link
              href="/#contact"
              className="ml-2 px-4 py-2 rounded-xl glass hover:scale-105 transition"
            >
              Записаться
            </Link>
          </div>

          {/* Burger */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-20 left-0 right-0 z-40 flex justify-center px-4 md:hidden">
          <div className="glass w-full max-w-5xl p-6 flex flex-col gap-4 text-center">
            <Link href="/#about" onClick={() => setOpen(false)}>
              Обо мне
            </Link>
            <Link href="/#projects" onClick={() => setOpen(false)}>
              Работы
            </Link>
            <Link href="/#services" onClick={() => setOpen(false)}>
              Услуги
            </Link>
            <Link href="/#reviews" onClick={() => setOpen(false)}>
              Отзывы
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Контакты
            </Link>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-xl glass"
            >
              Записаться
            </Link>
          </div>
        </div>
      )}
    </>
  );
}