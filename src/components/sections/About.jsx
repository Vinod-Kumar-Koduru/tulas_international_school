import { Check } from "lucide-react";
import { about } from "../../data/content";
import Reveal from "../animation/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border-2 border-ink bg-accent px-4 py-1 text-sm font-extrabold dark:text-ink">A place to grow</p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">{about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{about.text}</p>
        </Reveal>
        <ul className="space-y-4">
          {about.points.map((p, i) => (
            <Reveal key={p} delay={i * 0.12}>
              <li className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-white p-5 shadow-[4px_4px_0px_rgba(17,24,39,1)] dark:bg-slate-900">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-brand text-ink"><Check size={20} /></span>
                <span className="font-bold">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
