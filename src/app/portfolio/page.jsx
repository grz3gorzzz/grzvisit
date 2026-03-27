import Projects from "@/components/sections/Projects";
import Link from "next/link";
import BlurBackground from "@/components/ui/BlurBackground";

export default function PortfolioPage() {
  return (
    <main>
      <BlurBackground />

      <h1 className="text-3xl text-center mt-20 mb-10">
        Портфолио работ
      </h1>

      <Projects />

      <div className="flex justify-center pb-20">
        <Link href="/">
          <button className="px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg hover:scale-105 transition">
            На главную
          </button>
        </Link>
      </div>
    </main>
  );
}