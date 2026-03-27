export default function GlassSection({ children, bg }) {
  return (
    <section className="px-6 py-24 flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden border border-white/30 shadow-xl">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Glass */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/30"></div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16">
          {children}
        </div>

      </div>
    </section>
  );
}