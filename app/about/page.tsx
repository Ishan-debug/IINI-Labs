
const principles = [
  {
    number: "01",
    title: "Intelligence with Purpose",
    description:
      "We build practical AI and software solutions around real business needs, not technology for its own sake.",
  },
  {
    number: "02",
    title: "Automation that Matters",
    description:
      "We help businesses reduce repetitive work, connect their tools, and spend more time on meaningful work.",
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "We aim for reliable, maintainable digital systems that can grow alongside the businesses using them.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020914] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
              ABOUT IINI LABS
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Technology.
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Built with Purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            We build intelligent digital systems for ambitious businesses,
            combining software, AI, and automation to solve practical
            problems and create better ways of working.
          </p>

          <a
            href="/start-project"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Build With Us <span>→</span>
          </a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
              WHO WE ARE
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Infinite possibilities.
              <br />
              Intelligent execution.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              IINI Labs is a technology venture focused on AI, software
              development, business automation, and digital systems.
            </p>
            <p>
              Our approach starts with understanding the problem. From
              there, we work toward a solution that is useful, clear,
              maintainable, and suited to the requirements of the business.
            </p>
            <p>
              Our goal is to make technology practical and accessible for
              businesses that want to work smarter and build for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
              OUR APPROACH
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Principles behind our work.
            </h2>
          </div>

          <div className="space-y-5">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 rounded-3xl border border-white/10 bg-[#030b17] p-7 transition duration-300 hover:border-blue-500/30 hover:bg-[#061222] sm:p-10 lg:grid-cols-[100px_1fr_1.2fr] lg:items-start"
              >
                <span className="text-sm font-medium text-blue-400">
                  {principle.number}
                </span>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-[#030b17] p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Have a problem worth solving?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Tell us what your business needs. Let&apos;s explore how
              software, AI, or automation can help.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/start-project"
                className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Start a Project <span>→</span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Contact Us <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}