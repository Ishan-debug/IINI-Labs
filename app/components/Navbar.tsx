
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07090d]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Official brand logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="IINI Labs homepage"
          className="flex min-w-0 shrink items-center"
        >
          <img
            src="/images/logo.png"
            alt="IINI Labs — Infinite Is Not Infinite"
            className="h-auto max-h-14 w-auto max-w-[210px] object-contain sm:max-w-[260px]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-[13px] transition lg:px-4 ${
                  active
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/start-project"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/[0.08] px-4 py-2.5 text-[13px] font-semibold text-blue-200 transition hover:border-blue-400/60 hover:bg-blue-500/[0.16] lg:inline-flex"
        >
          Start a Project
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/[0.06] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.08] bg-[#07090d] px-4 pb-6 pt-3 sm:px-6 md:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-blue-500/10 text-blue-200"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/start-project"
              onClick={closeMenu}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Start a Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
