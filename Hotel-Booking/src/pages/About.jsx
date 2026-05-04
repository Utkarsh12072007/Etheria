import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const stats = [
  ["120+", "Stays"],
  ["18", "Cities"],
  ["4.8★", "Rating"],
];

const faqs = [
  ["How do I book?", "Search your destination, select dates, and confirm instantly."],
  ["Are hotels verified?", "All listings are reviewed for quality and accuracy."],
  ["Can I cancel?", "Flexible cancellation is available on most stays."],
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center text-left"
      >
        <span className="text-sm font-medium text-zinc-700">{q}</span>
        <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-xs text-zinc-600">{a}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-gradient-to-b from-[#f5efe6] to-[#e7dcc9] py-14 text-zinc-900 ">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-14">

          <div className="max-w-md">
            <p className="text-xs tracking-widest text-amber-700 mb-2">
              ABOUT ETHERIA
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Stay better, book simpler
            </h2>

            <p className="mt-3 text-sm text-zinc-600 leading-6">
              Verified stays, clear pricing, and a calm booking experience —
              designed for comfort from start to finish.
            </p>

            <div className="flex gap-6 mt-5">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <p className="text-amber-700 font-semibold">{v}</p>
                  <p className="text-xs text-zinc-500">{l}</p>
                </div>
              ))}
            </div>

            <button className="mt-6 px-5 py-2 rounded-full bg-zinc-900 text-white text-sm
              transition hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5">
              Check availability →
            </button>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">
              FAQs
            </h3>

            {faqs.map(([q, a]) => (
              <FAQ key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#ddd2bf]/90" />
    </section>
  );
}
