import { useEffect, useRef } from "react"
import posterImage from "../assets/homepagecover.jpeg"
import bgvideo from "../assets/bgvideo.mp4"

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        aria-hidden="true"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute top-0 w-full h-44 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute bottom-0 w-full h-72 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-5xl">

          <p className="text-sm md:text-base text-white/85 mb-5 drop-shadow">
            Unforgettable stays await on Etheria
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            Discover Luxury Stays
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-sm md:text-base text-white/90 leading-7 drop-shadow">
            Book premium hotels and experience comfort like never before with Etheria.
          </p>

          <button className="group mt-9 relative overflow-hidden rounded-full px-6 py-3 text-sm text-white">
            <span className="absolute inset-0 rounded-full border border-white/30 bg-white/25 backdrop-blur-md" />
            <span className="absolute inset-0 bg-white/40 opacity-0 transition group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              Explore Hotels
              <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </button>

        </div>
      </div>

    </section>
  )
}
