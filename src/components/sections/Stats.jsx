import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "../../data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      if (ref.current) {
        ref.current.textContent = value.toLocaleString() + suffix;
      }
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = Math.round(v).toLocaleString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="px-6 py-20 text-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center lg:grid-cols-4 items-center">
        {/* School Video Element */}
        <div className="col-span-2 h-full w-full lg:col-span-2">
          <video
            src="https://assets.tulas.edu.in/Desktop_TIS.mp4"
            autoPlay
            loop
            muted
            controls
            playsInline
            preload="metadata"
            aria-label="Tulas International School campus video"
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Stats Numerical Counters Grid */}
        <motion.div
          className="col-span-2 grid grid-cols-2 gap-6 lg:col-span-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col justify-center rounded-xl border-2 border-ink bg-white p-6 shadow-[3px_3px_0px_rgba(17,24,39,1)] dark:border-slate-100 dark:bg-slate-900"
            >
              <div className="text-3xl font-extrabold text-teal-800 dark:text-brand md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix || ""} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
