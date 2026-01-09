import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  once = true,
  className = "",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}
