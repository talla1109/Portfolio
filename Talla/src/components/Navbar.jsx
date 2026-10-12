import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active, name }) {
  const [open, setOpen] = useState(false);

  const linkClass = (id) =>
    `block px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
      active === id ? "text-neon glow-text" : "text-white hover:text-neon"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-6xl rounded-b-[2rem] border-x border-b border-white/10 bg-[#0c0c0c]/95 shadow-[0_10px_40px_rgba(255,43,43,0.08)] backdrop-blur">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10" aria-label="Main navigation">
        <a href="#home" className="font-display text-3xl font-bold text-neon glow-text">
          {name}
        </a>

        <ul className="hidden gap-4 md:flex lg:gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-neon md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-6 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
