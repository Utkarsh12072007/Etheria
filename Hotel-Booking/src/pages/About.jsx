import { useState } from "react";
import { FiChevronDown, FiMapPin, FiStar } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";

const stats = [
  { value: "120+", label: "Stays", icon: IoBedOutline },
  { value: "18", label: "Cities", icon: FiMapPin },
  { value: "4.8★", label: "Rating", icon: FiStar },
]

const faqs = [
  ["How do I book?", "Search destination, pick dates, and confirm instantly."],
  ["Are hotels verified?", "Listings are reviewed for quality and accuracy."],
  ["Can I cancel?", "Flexible cancellation on most stays."],
  ["Support?", "24/7 customer support via chat and email."],
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#e7ddcf] py-5 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium text-zinc-800">{q}</span>

        <FiChevronDown
          className={`text-zinc-400 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] pt-3 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-6 text-zinc-500">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#efe6d8] pt-24 pb-12 text-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f1e8]/60 to-[#e7dccb]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-[1.05fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-3 text-[11px] tracking-[0.22em] text-amber-700">
            ABOUT ETHERIA
          </p>

          <h2 className="text-[3.3rem] font-semibold leading-[0.96] tracking-[-0.05em]">
            Stay better, <br /> book simpler
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-7 text-zinc-600">
            Verified stays, clear pricing, and a calm booking experience —
            designed for comfort from start to finish.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={label} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8dece] bg-white text-amber-700">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-[1.35rem] font-semibold leading-none text-amber-700">
                      {value}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">{label}</p>
                  </div>
                </div>

                {i !== stats.length - 1 && (
                  <div className="mx-6 h-9 w-px bg-[#e5dac9]" />
                )}
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
            Check availability
          </button>
        </div>

        <div className="rounded-[30px] border border-[#e7ddcf] bg-[#f6f1e8]/80 p-8 shadow-sm">
          <h3 className="mb-8 text-[2rem] font-semibold tracking-[-0.04em]">
            FAQs
          </h3>

          <div className="space-y-1">
            {faqs.map(([q, a]) => (
              <FAQ key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-[#ddd2bf]/90" />
    </section>
  )
}
