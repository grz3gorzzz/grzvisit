import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Reviews from "@/components/sections/Reviews";

import BlurBackground from "@/components/ui/BlurBackground";
import CursorGlow from "@/components/ui/CursorGlow";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <BlurBackground />
      <CursorGlow />

      <Hero />
      <About />

      {/* Работы (только 2) */}
      <Projects limit={2} />

      {/* Кнопка полного портфолио */}
      <div className="flex justify-center pb-20">
        <Link href="/portfolio">
          <button className="px-6 py-3 rounded-2xl glass border border-white/20 shadow-lg hover:scale-105 transition">
            Открыть полное портфолио
          </button>
        </Link>
      </div>

      {/* До / После */}
      <BeforeAfter
        before="/images/before.jpg"
        after="/images/after.jpg"
      />

      {/* Услуги */}
      <Services />

      <Reviews />

      {/* Запись */}
      <Contact />

      <Footer />
    </main>
  );
}