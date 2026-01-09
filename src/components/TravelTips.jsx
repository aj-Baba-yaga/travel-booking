import Reveal from "./motion/Reveal";

export default function TravelTips() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/tips/travel-tips-bg.jpg"
          alt="Travel tips"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20">
        <Reveal>
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold text-white/80">
              Travel Tips & Inspiration
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Plan smarter trips with guides, deals, and insider advice.
            </h2>
            <p className="mt-4 text-white/85">
              Discover handpicked itineraries, best seasons to visit, and budget
              hacks to make every trip unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition">
                Get Inspired
              </button>
              <button className="rounded-xl bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/25 transition">
                View Guides
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
