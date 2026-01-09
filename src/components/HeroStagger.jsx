import { motion, useReducedMotion } from "framer-motion";

export default function HeroStagger({ children }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
