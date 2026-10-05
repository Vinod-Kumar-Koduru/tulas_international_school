import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduceMotion || !matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("has-cursor");
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => setHovering(Boolean(e.target.closest("a, button")));
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: hovering ? 1.8 : 1, backgroundColor: hovering ? "rgba(45,212,191,0.2)" : "rgba(45,212,191,0)" }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 rounded-full border-2 border-brand [@media(pointer:fine)]:block"
    />
  );
}
