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
    text: "I found a clean business hotel close to my meetings. The pricing was clear and check-in took only a few minutes.",
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
    text: "The hotel was comfortable, verified, and close to places we wanted to visit. I would book through Etheria again.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-[#ede3d4] to-[#f4eee2] px-4 py-20 md:px-6 lg:px-16" >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#05070c] bg-[radial-gradient(circle_at_top,#c89d6e,transparent_50%)] px-8 py-20 shadow-2xl md:px-14">

        <div className="mb-12 text-center text-white">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Trusted by Travellers
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Experiences worth <br /> remembering
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75">
            Real experiences from travellers booking weekend escapes, work trips, and family stays with Etheria.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map(({ name, place, rating, text }) => (
            <article key={name} 
            className="group relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[-1deg] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]" >
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#c89d6e]/0 via-transparent to-[#c89d6e]/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-[#c89d6e]/10" />
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <span className="rounded-full bg-[#f4dc72] px-3 py-1 text-xs font-semibold text-[#8b4513]">
                  ★ {rating}
                </span>
              </div>

              <p className="text-sm leading-6 text-zinc-700">
                "{text}"
              </p>

              <div className="mt-5 border-t-[1.5px] border-zinc-300 pt-4">
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="mt-1 text-xs text-zinc-600">{place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
