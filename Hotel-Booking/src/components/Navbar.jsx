import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Hotels", href: "#" },
  { label: "Experience", href: "#" },
  { label: "About", href: "#about" },
];

export default function Navbar({ onNavClick, onGetStarted }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (event, item) => {
    event.preventDefault();
    onNavClick?.(item.href);
    setOpen(false);
  };

  const handleGetStarted = () => {
    onGetStarted?.();
    setOpen(false);
  };

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between transition-all duration-300 ${
      scrolled
        ? "bg-white/80 backdrop-blur-2xl border-b border-black/10 shadow-[0_12px_40px_rgba(59,40,24,0.12)]"
        : "bg-white/10 backdrop-blur-md"
    }`}>

      <h1 className="group relative flex items-center">
        <span className="relative font-['Cinzel'] text-xl md:text-2xl font-extrabold tracking-[0.22em] leading-none">
          <span className={`bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)] transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-zinc-950 via-amber-800 to-zinc-950"
              : "bg-gradient-to-r from-white via-amber-100 to-white"
          }`}>
            ETHERIA
          </span>
          <span className={`absolute -bottom-2 left-0 h-[2px] w-12 rounded-full bg-gradient-to-r transition-all duration-300 group-hover:w-20 ${
            scrolled
              ? "from-amber-700 via-zinc-900/60 to-transparent"
              : "from-amber-200 via-white/80 to-transparent"
          }`} />
        </span>
      </h1>

      <div className={`hidden md:flex items-center gap-1 px-1 py-1 rounded-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-black/5 border border-black/10"
          : "bg-white/10 border border-white/20"
      }`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href}
            onClick={(event) => handleNavClick(event, item)}
            className={`group relative px-4 py-1.5 text-sm rounded-full transition-all duration-300 hover:-translate-y-[1px] ${
              scrolled
                ? "text-zinc-700 hover:text-black"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.label}
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 ${
              scrolled ? "bg-amber-700" : "bg-white"
            }`} />
            <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 ${
              scrolled ? "bg-black/5" : "bg-white/15"
            }`} />
          </a>
        ))}
      </div>

      <button onClick={handleGetStarted} className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold relative overflow-hidden transition-all duration-300 group ${
        scrolled
          ? "bg-black text-white border border-black shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
          : "bg-white/90 text-black border border-white/30"
      }`}>
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
        <span className="relative z-10">Get started</span>
        <span className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-2 ${
          scrolled ? "bg-white/20" : "bg-white"
        }`}>→</span>
      </button>

      <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5">
        {[0,1,2].map((i) => (
          <span key={i}
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${
              open
                ? i === 0 ? "rotate-45 translate-y-2"
                : i === 1 ? "opacity-0"
                : "-rotate-45 -translate-y-2"
                : ""
            }`}
          />
        ))}
      </button>

      {open && (
        <div className={`absolute top-full left-0 w-full flex flex-col p-5 gap-2 md:hidden backdrop-blur-xl border-t transition-all duration-300 ${
          scrolled
            ? "bg-white/90 border-black/10"
            : "bg-white/20 border-white/10"
        }`}>
          {navItems.map((item) => (
            <a key={item.label}
              href={item.href}
              onClick={(event) => handleNavClick(event, item)}
              className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                scrolled
                  ? "text-zinc-800 hover:bg-black/5"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button onClick={handleGetStarted} className="mt-3 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold w-fit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
