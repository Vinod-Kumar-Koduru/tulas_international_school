import { motion } from "framer-motion";
import {
  Bike,
  CircleDot,
  Dumbbell,
  Footprints,
  Target,
  Waves,
} from "lucide-react";
import { sports } from "../../data/content";
import Reveal from "../animation/Reveal";

const icons = {
  Archery: Target,
  Cycling: Bike,
  Swimming: Waves,
  "Horse riding": Footprints,
  Volleyball: CircleDot,
  Football: Dumbbell,
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border-2 border-ink bg-brand px-4 py-1 text-sm font-extrabold text-ink">
            Learn your way
          </p>
          <h2 className="mb-12 text-3xl font-extrabold sm:text-5xl">
            Sports and activities
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal
                key={p.title}
                delay={(i % 3) * 0.12}
                className="h-64"
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-3xl border-2 border-ink bg-slate-800 shadow-[4px_4px_0px_rgba(17,24,39,1)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={
                      p.img ? { backgroundImage: `url("${p.img}")` } : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <span className="mb-3 grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-brand text-ink">
                      {Icon && <Icon size={22} aria-hidden="true" />}
                    </span>
                    <h3 className="text-2xl font-extrabold">{p.title}</h3>
                    <p className="mt-1 max-w-sm text-sm text-white/90">
                      {p.text}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
