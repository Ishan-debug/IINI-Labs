"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));

    setStatus("");
    setIsSuccess(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (
      name.length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.length < 10
    ) {
      setStatus("Please enter a valid name, email, and message.");
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");
    setIsSuccess(false);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contacts/send/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 400) {
          const errors = data
            ? Object.values(data).flat().join(" ")
            : "Please check your details and try again.";

          throw new Error(errors);
        }

        throw new Error(
          "We couldn't send your message. Please try again shortly."
        );
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus(
        "Your message has been sent successfully. Thank you for contacting IINI Labs!"
      );
      setIsSuccess(true);
    } catch (error) {
      setStatus(
        error instanceof TypeError
          ? "Cannot connect to our server. Make sure Django is running on port 8000."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."
      );

      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020914] text-white">
      {/* Page heading */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500" />

            <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
            Let's talk
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              technology.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a business challenge, a project idea, or a question about our
            services? Tell us about it, and let's explore the right solution.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-blue-400">
            START A CONVERSATION
          </p>

          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Every good system starts with a problem worth solving.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
            Share what you're trying to build, improve, automate, or secure.
            We'll use your message to understand your requirements.
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-slate-500">Prefer a project brief?</p>

            <a
              href="/start-project"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Use our project inquiry form <span>→</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#030b17] p-6 sm:p-9"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-slate-300"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={150}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-slate-300"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={254}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-slate-300"
              >
                How can we help?
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your idea or challenge..."
                rows={6}
                required
                minLength={10}
                maxLength={5000}
                className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <span>→</span>}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-6 ${
                  isSuccess ? "text-emerald-400" : "text-slate-300"
                }`}
              >
                {status}
              </p>
            )}

            <p className="text-xs leading-5 text-slate-500">
              Your message will be saved to our database when submission
              succeeds. Email notifications are not configured yet.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}