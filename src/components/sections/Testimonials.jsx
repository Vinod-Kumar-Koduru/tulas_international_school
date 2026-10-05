import { Quote } from "lucide-react";
import { testimonials } from "../../data/content";
import Reveal from "../animation/Reveal";

export default function Testimonials() {
  return (
    <section id="voices" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <p className="mb-4 inline-flex rounded-full border-2 border-ink bg-accent px-4 py-1 text-sm font-extrabold dark:text-ink">Kind words</p>
        <h2 className="mb-12 text-3xl font-extrabold sm:text-5xl">Voices of our community</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12}>
            <figure className="h-full rounded-3xl border-2 border-ink bg-white p-8 shadow-[4px_4px_0px_rgba(17,24,39,1)] dark:bg-slate-900">
              <Quote className="text-teal-700 dark:text-brand" />
              <blockquote className="mt-4 text-lg">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm font-bold opacity-70">{t.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
