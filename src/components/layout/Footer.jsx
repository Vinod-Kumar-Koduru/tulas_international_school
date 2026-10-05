import { ArrowUpRight, MapPin } from "lucide-react";
import { footer, image, nav } from "../../data/content";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="overflow-hidden border-t-2 border-ink bg-slate-100 px-6 py-16 text-ink dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 rounded-[2rem] border-2 border-ink bg-brand p-8 shadow-[6px_6px_0px_rgba(17,24,39,1)] dark:border-slate-100 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-ink bg-accent px-4 py-1 text-sm font-extrabold text-ink">
              Tulas International School
            </p>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
              Let’s make room for{" "}
              <span className="font-serif italic">what’s next.</span>
            </h2>
            <p className="mt-4 max-w-xl text-ink/80">
              Curious minds, confident futures. Start exploring a school where
              every learner can thrive.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5"
            >
              Admissions <ArrowUpRight size={18} />
            </a>
            <a
              href={footer.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5"
            >
              Visit our website <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-b border-ink/20 pb-12 dark:border-slate-100/20 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="mb-5 inline-flex items-center gap-3"
              aria-label="Tulas International School home"
            >
              <img src={image} alt="" className="h-12 w-12 object-contain" />
              <span className="max-w-48 text-lg font-extrabold leading-tight">
                Tulas International School
              </span>
            </a>
            <a
              href={footer.map}
              target="_blank"
              rel="noreferrer"
              className="flex max-w-sm items-start gap-2 text-sm leading-relaxed opacity-75 transition hover:text-teal-700 hover:opacity-100 dark:hover:text-brand"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal-700 dark:text-brand" />
              <span>
                {footer.address}
                <span className="mt-2 block font-bold underline decoration-accent decoration-2 underline-offset-4">
                  View on Google Maps
                </span>
              </span>
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-teal-800 dark:text-brand">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-teal-700 dark:hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-teal-800 dark:text-brand">
              Stay connected
            </h3>
            <p className="mb-4 max-w-sm text-sm leading-relaxed opacity-75">
              Learn more about life at Tulas International School and take the
              next step for your family.
            </p>
            <a
              href={footer.site}
              target="_blank"
              rel="noreferrer"
              className="font-bold underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-700 dark:hover:text-brand"
            >
              tis.edu.in
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs opacity-65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tulas International School. All rights
            reserved.
          </p>
          <a href="#top" className="font-bold hover:opacity-100">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
