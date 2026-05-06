const experiences = [
  {
    name: "Aarav Mehta",
    place: "Family trip in Jaipur",
    rating: "4.9",
    text: "The haveli looked exactly like the photos, and the staff helped us plan a smooth family stay near the old city.",
  },
  {
    name: "Maya Kapoor",
    place: "Work trip in Mumbai",
    rating: "4.8",
    text: "I found a clean business hotel close to my meetings. The rupee pricing was clear, and check-in took only a few minutes.",
  },
  {
    name: "Rohan Sen",
    place: "Weekend stay in Bangalore",
    rating: "4.7",
    text: "Etheria helped us choose a quiet stay with metro access and fast Wi-Fi. It was perfect for a short city break.",
  },
  {
    name: "Anika Rao",
    place: "Festival visit in Hyderabad",
    rating: "4.9",
    text: "The hotel was comfortable, verified, and close to the places we wanted to visit. I would book through Etheria again.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-[#0f1115] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d8bf9a_0%,#7c5a33_34%,#0f1115_72%)] opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-[#0f1115]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Guest Experience
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Real Indian stays, simple stories
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75">
            Hear from travellers booking family holidays, work trips, weekend breaks, and festival visits across India.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <article
              key={experience.name}
              className="rounded-2xl border border-white/80 bg-white/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_55px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                  {experience.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  ★ {experience.rating}
                </span>
              </div>

              <p className="text-sm leading-6 text-zinc-700">"{experience.text}"</p>

              <div className="mt-5 border-t border-black/10 pt-4">
                <h3 className="text-sm font-semibold text-zinc-950">{experience.name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{experience.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
