export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        <div className="text-xl font-semibold tracking-tight text-white">
          IINI<span className="text-zinc-500">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#work" className="transition hover:text-white">
            Work
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Start a Project
        </a>

      </div>
    </nav>
  );
}