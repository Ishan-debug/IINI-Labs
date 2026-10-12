
const projects = [
  {
    number: "01",
    category: "AI & SOFTWARE",
    title: "Intelligent Business Systems",
    description:
      "Custom digital systems designed to connect business operations, automation, data, and intelligent software into one scalable platform.",
    status: "Available for Development",
    service: "Custom Software",
  },
  {
    number: "02",
    category: "AUTOMATION",
    title: "Business Automation",
    description:
      "Automated workflows that reduce repetitive work, connect different tools, and help businesses operate more efficiently.",
    status: "Available for Development",
    service: "Automation",
  },
  {
    number: "03",
    category: "WEB APPLICATIONS",
    title: "Modern Web Platforms",
    description:
      "Fast, responsive, and scalable web applications built around the specific requirements of a business or organization.",
    status: "Available for Development",
    service: "Web Development",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020914] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
              OUR WORK
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Systems.
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Built With Purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            We build digital products and intelligent systems around real
            business requirements — from automation and web applications to
            AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Clickable project cards */}
      <section aria-label="Project services">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="space-y-6">
            {projects.map((project) => (
              <a
                key={project.number}
                href={`/start-project?service=${encodeURIComponent(project.service)}`}
                aria-label={`Start a project: ${project.title}`}
                className="group block rounded-3xl border border-white/10 bg-[#030b17] p-7 outline-none transition duration-300 hover:border-blue-500/50 hover:bg-[#061222] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#020914] sm:p-10 lg:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-start">
                  {/* Number */}
                  <div>
                    <span className="text-sm font-medium text-blue-400">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-xs font-medium tracking-[0.25em] text-slate-500">
                      {project.category}
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight transition-colors group-hover:text-blue-300 sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                      Discuss this project
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  {/* Status */}
                  <div className="lg:text-right">
                    <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs text-blue-400">
                      {project.status}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Build With Us */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="rounded-3xl border border-white/10 bg-[#030b17] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.2em] text-blue-400">
                YOUR IDEA
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Your project could be next.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Have a business problem that could be solved with software,
                AI, or automation? Tell us what you want to build.
              </p>

              <a
                href="/start-project"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020914]"
              >
                Start a Project
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}