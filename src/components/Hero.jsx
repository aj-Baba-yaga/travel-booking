import { motion } from "framer-motion";

import HeroTabs from "./HeroTabs";
import HeroSearch from "./HeroSearch";
import HeroStagger from "./HeroStagger";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Hero({ activeCategory, setActiveCategory, onSearch }) {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero/flights-hero.jpg"
          alt="Travel the world"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <HeroStagger>
          <div className="max-w-3xl text-white">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              variants={item}
            >
              Let’s Travel The World Together
            </motion.h1>

            <motion.p
              className="mt-4 text-base sm:text-lg text-white/90"
              variants={item}
            >
              Discover flights, hotels, and holiday packages tailored just for
              you.
            </motion.p>

            <motion.div className="mt-10" variants={item}>
              <HeroTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </motion.div>

            <motion.div className="mt-6" variants={item}>
              <HeroSearch activeCategory={activeCategory} onSearch={onSearch} />
            </motion.div>
          </div>
        </HeroStagger>
      </div>
    </section>
  );
}
