
"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    code: "INTELLIGENCE_LAYER",
    title: "AI Solutions",
    headline: "Make your data work smarter.",
    description:
      "Explore AI-powered applications, intelligent data workflows, and integrations designed around real business requirements.",
    features: [
      "AI-powered applications",
      "Intelligent data workflows",
      "AI integrations",
      "Custom AI assistants",
    ],
    examples: [
      "Answer repetitive customer questions",
      "Search and organize business information",
      "Extract useful information from documents",
    ],
    service: "AI Solutions",
    icon: "✳",
  },
  {
    number: "02",
    code: "WORKFLOW_ENGINE",
    title: "Business Automation",
    headline: "Less repetition. More momentum.",
    description:
      "Connect business tools and automate routine workflows so your team can focus on work that matters.",
    features: [
      "Business process automation",
      "Lead management workflows",
      "API integrations",
      "Automated notifications",
    ],
    examples: [
      "Capture and organize incoming leads",
      "Connect forms to business workflows",
      "Automate routine updates and notifications",
    ],
    service: "Automation",
    icon: "↗",
  },
  {
    number: "03",
    code: "SOFTWARE_FOUNDATION",
    title: "Software Development",
    headline: "Built around how you work.",
    description:
      "Develop web applications and internal systems around your organization's actual requirements.",
    features: [
      "Web applications",
      "Custom dashboards",
      "Backend and API development",
      "Database-driven systems",
    ],
    examples: [
      "Build a customer-facing web platform",
      "Manage business information in one place",
      "Create an internal reporting dashboard",
    ],
    service: "Custom Software",
    icon: "⌘",
  },
  {
    number: "04",
    code: "SECURITY_FOUNDATION",
    title: "Cyber Security",
    headline: "Build with security in mind.",
    description:
      "Improve application security practices and identify areas that need attention before they become bigger problems.",
    features: [
      "Authorized security reviews",
      "Application security guidance",
      "Secure configuration",
      "Security improvement planning",
    ],
    examples: [
      "Review an application's security controls",
      "Identify common configuration weaknesses",
      "Improve authentication and access practices",
    ],
    service: "Cyber Security",
    icon: "⬡",
  },
];

const problems = [
  {
    title: "Too much manual work",
    description: "Reduce repetitive tasks and connect business tools.",
    service: "Automation",
  },
  {
    title: "Need a website or platform",
    description: "Build a digital product around your requirements.",
    service: "Web Development",
  },
  {
    title: "Want to use AI",
    description: "Explore practical AI features for your business.",
    service: "AI Solutions",
  },
  {
    title: "Need a custom business system",
    description: "Bring workflows and business data together.",
    service: "Custom Software",
  },
  {
    title: "Concerned about security",
    description: "Identify security gaps and improvement priorities.",
    service: "Cyber Security",
  },
];

function projectUrl(service: string) {
  return `/start-project?service=${encodeURIComponent(service)}`;
}

export default function ServicesPage() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020914] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
              CAPABILITIES / 001—004
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Technology is a tool.
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Progress is the goal.
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Every business has different problems. Explore our capabilities
              to discover how AI, automation, software, and security could
              help solve yours.
            </p>

            <a
              href="#solution-finder"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-blue-500/40 px-6 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/10"
            >
              Find your solution <span>↓</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
            {[
              ["01", "AI SOLUTIONS"],
              ["02", "AUTOMATION"],
              ["03", "SOFTWARE"],
              ["04", "SECURITY"],
            ].map(([number, label]) => (
              <a
                key={number}
                href={`#service-${number}`}
                className="group flex items-center gap-3 py-2"
              >
                <span className="text-xs text-blue-400">{number}</span>
                <span className="text-xs tracking-[0.15em] text-slate-400 transition group-hover:text-white">
                  {label}
                </span>
                <span className="ml-auto text-slate-600 transition group-hover:text-blue-400">
                  ↘
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solution finder */}
      <section
        id="solution-finder"
        className="scroll-mt-8 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
                SOLUTION FINDER
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                What are you trying to solve?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                Choose the problem closest to yours. We&apos;ll direct you
                toward a relevant service.
              </p>
            </div>

            <div className="space-y-3">
              {problems.map((problem, index) => {
                const selected = selectedProblem === index;

                return (
                  <button
                    key={problem.title}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedProblem(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition duration-200 sm:p-6 ${
                      selected
                        ? "border-blue-500/60 bg-blue-500/[0.08]"
                        : "border-white/10 bg-[#030b17] hover:border-white/25 hover:bg-[#061222]"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm ${
                        selected
                          ? "border-blue-400/50 bg-blue-500/15 text-blue-300"
                          : "border-white/10 text-slate-500"
                      }`}
                    >
                      {selected ? "✓" : `0${index + 1}`}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-medium text-white">
                        {problem.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-400">
                        {problem.description}
                      </span>
                    </span>

                    <span className="text-xl text-slate-500">→</span>
                  </button>
                );
              })}

              {selectedProblem !== null && (
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-6">
                  <p className="text-xs tracking-[0.2em] text-blue-400">
                    SUGGESTED NEXT STEP
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {problems[selectedProblem].service}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Tell us more about your requirements and we&apos;ll
                    review the project details.
                  </p>

                  <a
                    href={projectUrl(problems[selectedProblem].service)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Explore this solution <span>→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service panels */}
      <section id="service-list">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
              WHAT WE CAN BUILD
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Four capabilities. One clear purpose.
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.number}
                id={`service-${service.number}`}
                className="group scroll-mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#030b17] transition duration-300 hover:border-blue-500/30"
              >
                <div className="grid lg:grid-cols-[1fr_0.85fr]">
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.25em] text-blue-400">
                        {service.code}
                      </span>

                      <span className="text-3xl text-blue-400/80 transition duration-300 group-hover:scale-110">
                        {service.icon}
                      </span>
                    </div>

                    <h3 className="mt-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-lg text-blue-200/90">
                      {service.headline}
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                      {service.description}
                    </p>

                    <a
                      href={projectUrl(service.service)}
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    >
                      Discuss this solution <span>→</span>
                    </a>
                  </div>

                  <div className="border-t border-white/10 bg-white/[0.02] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                    <p className="text-xs font-medium tracking-[0.25em] text-slate-500">
                      CAPABILITIES
                    </p>

                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-0.5 text-blue-400">↗</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9 border-t border-white/10 pt-6">
                      <p className="text-xs font-medium tracking-[0.2em] text-slate-500">
                        EXAMPLE USE CASES
                      </p>

                      <ul className="mt-5 space-y-3">
                        {service.examples.map((example) => (
                          <li
                            key={example}
                            className="text-sm leading-6 text-slate-400"
                          >
                            — {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#030b17] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-medium tracking-[0.3em] text-blue-400">
                YOUR NEXT MOVE
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start with the problem.
                <br />
                We&apos;ll explore the solution.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Every good project begins with a clear understanding of what
                needs to change. Share your idea and we&apos;ll review your
                requirements.
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
                  Ask a Question <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}