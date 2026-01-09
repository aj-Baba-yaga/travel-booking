import { motion, useReducedMotion } from "framer-motion";

export default function StaggerGridTrending({ children }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="mt-8 grid gap-4 md:gap-6">{children}</div>;
  }

  return (
    <motion.div
      className="mt-8 grid gap-4 md:gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
