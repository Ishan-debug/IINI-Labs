
"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const services = [
  "AI Solutions",
  "Automation",
  "Cyber Security",
  "Web Development",
  "AI + Automation",
  "Custom Software",
];

const budgets = [
  "₹10k – ₹25k",
  "₹25k – ₹50k",
  "₹50k – ₹1L",
  "₹1L+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Just exploring",
];

export default function StartProjectPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#020914] text-white" />
      }
    >
      <StartProjectForm />
    </Suspense>
  );
}

function StartProjectForm() {
  const searchParams = useSearchParams();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Preselect the service supplied in the URL.
  useEffect(() => {
    const service = searchParams.get("service");

    if (service && services.includes(service)) {
      setSelectedServices((current) =>
        current.includes(service) ? current : [...current, service]
      );
    }
  }, [searchParams]);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );

    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setError("");

    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      services: selectedServices,
      description: String(formData.get("description") ?? "").trim(),
      budget: String(formData.get("budget") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
    };

    if (payload.name.length < 2) {
      setError("Please enter a valid name.");
      return;
    }

    if (payload.description.length < 20) {
      setError(
        "Please describe your project in at least 20 characters."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/inquiries/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const messages = Object.values(data).flat();

        const firstError = messages.find(
          (item): item is string => typeof item === "string"
        );

        throw new Error(
          firstError ||
            "Unable to submit your request. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#020914] px-6 text-white">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center">
          <div className="w-full rounded-3xl border border-blue-500/20 bg-[#06101e] p-10 text-center shadow-2xl sm:p-16">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-2xl text-blue-400">
              ✓
            </div>

            <p className="mb-4 text-sm font-medium tracking-[0.3em] text-blue-400">
              REQUEST RECEIVED
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something
              <span className="bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent">
                {" "}
                intelligent.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Thanks for reaching out to IINI Labs. Your project
              request has been saved successfully. We&apos;ll review
              your requirements and get back to you.
            </p>

            <a
              href="/"
              className="mt-10 inline-flex rounded-full bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-400"
            >
              Back to Home →
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020914] text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(70,140,220,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(70,140,220,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:py-16">
        {/* Header */}
        <header className="mb-14 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            IINI<span className="text-blue-500">.</span>
          </a>

          <a
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to Home
          </a>
        </header>

        {/* Hero */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-sm font-medium tracking-[0.3em] text-blue-400">
              START A PROJECT
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Tell us what you&apos;re
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              building.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Share a few details about your project. We&apos;ll review your
            requirements and get back to you with the next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 01: Client details */}
          <section className="rounded-3xl border border-slate-800 bg-[#050d18]/80 p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-medium text-blue-400">01</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Your details
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Tell us how we can contact you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                name="name"
                placeholder="Your name"
                required
              />

              <Input
                label="Business / Company"
                name="company"
                placeholder="Company name"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <Input
                label="Phone / WhatsApp"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </section>

          {/* 02: Services */}
          <section className="rounded-3xl border border-slate-800 bg-[#050d18]/80 p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-medium text-blue-400">02</p>
              <h2 className="mt-2 text-2xl font-semibold">
                What do you need?
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Select everything that applies.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const selected = selectedServices.includes(service);

                return (
                  <button
                    key={service}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleService(service)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      selected
                        ? "border-blue-500 bg-blue-500/10 text-white"
                        : "border-slate-800 bg-[#07111e] text-slate-300 hover:border-blue-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium">{service}</span>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                          selected
                            ? "border-blue-400 bg-blue-500 text-white"
                            : "border-slate-700 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 03: Description */}
          <section className="rounded-3xl border border-slate-800 bg-[#050d18]/80 p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-medium text-blue-400">03</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Tell us about the project
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Explain the problem and what you want to build.
              </p>
            </div>

            <textarea
              name="description"
              required
              minLength={20}
              maxLength={10000}
              rows={7}
              placeholder="What are you trying to build, automate, improve, or secure?"
              className="w-full resize-y rounded-2xl border border-slate-800 bg-[#07111e] px-5 py-4 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
            />
          </section>

          {/* 04: Budget and timeline */}
          <section className="rounded-3xl border border-slate-800 bg-[#050d18]/80 p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-medium text-blue-400">04</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Project details
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Select
                label="Estimated Budget"
                name="budget"
                options={budgets}
              />

              <Select
                label="Expected Timeline"
                name="timeline"
                options={timelines}
              />
            </div>
          </section>

          {/* Errors */}
          {error && (
            <p
              role="alert"
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </p>
          )}

          {/* Submit */}
          <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-800 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-6 text-slate-500">
              By submitting this form, you&apos;re sending your project
              requirements to IINI Labs for review.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-9 py-4 font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.25)] transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting
                ? "Sending Request..."
                : "Send Project Request"}

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Input({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
        {required && <span className="ml-1 text-blue-400">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-slate-800 bg-[#07111e] px-5 py-4 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full appearance-none rounded-2xl border border-slate-800 bg-[#07111e] px-5 py-4 text-white outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}