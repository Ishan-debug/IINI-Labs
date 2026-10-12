
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#030914] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        {/* Left content */}
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <span className="text-xs font-medium tracking-[0.18em] text-blue-200">
              INFINITE IS NOT INFINITE LABS
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[82px]">
            We Build
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            Digital Systems
            <br />
            for Ambitious
            <br />
            Businesses.
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            From AI-powered automation to enterprise-grade cybersecurity, we
            help businesses build, secure, and scale their digital future.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/start-project"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-blue-500/80 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10"
            >
              Explore Services
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-y-8 sm:grid-cols-4">
            <div className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm text-slate-500">Projects Delivered</p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm text-slate-500">Happy Clients</p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm text-slate-500">Systems Built</p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-2 text-sm text-slate-500">Technology</p>
            </div>
          </div>
        </div>

        {/* Right-side technology cards */}
        <div className="relative hidden min-h-[560px] lg:block">
          <div className="absolute right-[5%] top-[5%] h-72 w-72 rounded-full border border-blue-400/10" />
          <div className="absolute right-[12%] top-[12%] h-56 w-56 rounded-full border border-blue-400/10" />
          <div className="absolute right-[19%] top-[19%] h-40 w-40 rounded-full border border-blue-400/10" />

          <div className="absolute left-0 top-[8%] flex items-center gap-4 rounded-2xl border border-blue-500/30 bg-[#071326]/90 p-5 shadow-xl shadow-blue-950/20 backdrop-blur">
            <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 p-3 text-2xl text-blue-400">
              ✦
            </div>
            <div>
              <p className="font-semibold">AI Automation</p>
              <p className="mt-1 text-sm text-slate-400">
                Smarter Workflows
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[27%] flex items-center gap-4 rounded-2xl border border-blue-500/30 bg-[#071326]/90 p-5 shadow-xl shadow-blue-950/20 backdrop-blur">
            <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 p-3 text-2xl text-blue-400">
              ◇
            </div>
            <div>
              <p className="font-semibold">Cyber Security</p>
              <p className="mt-1 text-sm text-slate-400">
                Stronger Defenses
              </p>
            </div>
          </div>

          <div className="absolute bottom-[17%] right-[2%] flex items-center gap-4 rounded-2xl border border-blue-500/30 bg-[#071326]/90 p-5 shadow-xl shadow-blue-950/20 backdrop-blur">
            <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 p-3 text-2xl text-blue-400">
              ↗
            </div>
            <div>
              <p className="font-semibold">Scalable Systems</p>
              <p className="mt-1 text-sm text-slate-400">
                Built for Growth
              </p>
            </div>
          </div>

          <div className="absolute bottom-[5%] left-[8%] rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
            <p className="text-xs tracking-widest text-slate-500">
              ENGINEERED FOR
            </p>
            <p className="mt-2 font-semibold text-blue-300">
              The Next Generation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}