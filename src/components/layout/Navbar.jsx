import { useState } from "react";
import { Menu, X } from "lucide-react";
import { image, nav } from "../../data/content";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-accent px-4 py-3 font-bold text-ink focus:not-sr-only"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-1 z-50 mx-auto max-w-7xl px-4">
        <nav
          aria-label="Main navigation"
          className="mt-3 flex items-center justify-between rounded-full border-2 border-ink bg-white/95 px-5 py-3 shadow-[3px_3px_0px_rgba(17,24,39,1)] backdrop-blur dark:border-slate-100 dark:bg-slate-900/95"
        >
          <a
            href="#top"
            className="flex items-center gap-3 text-lg font-extrabold"
            aria-label="Tulas International School home"
          >
            <img src={image} alt="" className="h-10 w-10 object-contain" />
            <span className="hidden sm:inline">Tulas International School</span>
          </a>
          <ul className="hidden gap-6 text-sm font-bold lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center transition-colors hover:text-teal-700">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-brand lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
          <ul
            id="mobile-navigation"
            hidden={!open}
            className="mt-2 rounded-3xl border-2 border-ink bg-white p-4 shadow-[3px_3px_0px_rgba(17,24,39,1)] dark:border-slate-100 dark:bg-slate-900 lg:hidden"
          >
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 py-3 font-bold hover:text-teal-700"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
      </header>
    </>
  );
}
