"use client";

import EarthGlobe from "./EarthGlobe";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-black">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-4">

          {/* LEFT SIDE */}
          <div className="relative z-10 flex flex-col items-start">

            {/* Label */}
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
              AI • SOFTWARE • AUTOMATION • SECURITY
            </p>

            {/* Heading */}
            <h1 className="max-w-3xl text-6xl font-bold leading-[0.92] tracking-[-0.045em] text-white sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px]">
              INFINITE IS NOT INFINITE
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              We build intelligent digital systems for ambitious businesses.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* START A PROJECT */}
              <a
                href="#contact"
                style={{ color: "#000000" }}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-zinc-200"
              >
                Start a Project
              </a>

              {/* EXPLORE OUR WORK */}
              <a
                href="#work"
                style={{ color: "#ffffff" }}
                className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-transparent px-8 py-4 text-sm font-medium transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
              >
                Explore Our Work
              </a>

            </div>
          </div>

          {/* RIGHT SIDE — EARTH */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Subtle glow */}
            <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-blue-500/5 blur-[100px] sm:h-[380px] sm:w-[380px]" />

            <div className="relative z-10">
              <EarthGlobe />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}