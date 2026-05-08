export default function Newsletter() {
  return (
    <section className="pt-12 pb-30 bg-gradient-to-b from-[#ded2bf] to-[#d8bd96]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-2xl overflow-hidden bg-[#0B1F3A]/90 backdrop-blur-xl border border-white/10 shadow-xl">

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="relative px-10 py-18 text-center text-white space-y-3">

            <h3 className="text-3xl font-bold">Stay inspired</h3>

            <p className="max-w-xl mx-auto text-sm text-white/70">
              Join our newsletter to discover new destinations, exclusive offers, and curated travel inspiration.
            </p>

            <div className="flex justify-center gap-3 pt-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-64 px-4 py-2.5 rounded-md text-sm text-white
                        bg-white/10 border border-white/20 placeholder:text-white/50
                        transition-all duration-300
                        hover:-translate-y-0.5 focus:-translate-y-0.5
                        hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] focus:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                        focus:bg-white/15 focus:border-white/40 focus:outline-none" />

              <button className="px-5 py-2.5 rounded-md text-sm text-white bg-black transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
                Subscribe →
              </button>

            </div>

            <p className="text-xs text-white/50">
              By subscribing, you agree to our Privacy Policy.
            </p>

          </div>
        </div>

      </div>
      
    </section>
  );
}