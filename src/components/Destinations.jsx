import { topDestinations } from "../data/destinations";
import Reveal from "./motion/Reveal";

export default function Destinations() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <Reveal delay={0.08}>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Top Destinations
            </h2>
            <p className="mt-2 text-neutral-600">
              Explore trending places loved by travelers worldwide.
            </p>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-emerald-500/80" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topDestinations.map((d) => (
            <article
              key={d.id}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm transition hover:shadow-md"
            >
              <img
                src={d.image}
                alt={d.name}
                className="h-48 sm:h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

              {/* content */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">{d.meta}</p>
                  </div>

                  <button className="rounded-xl bg-white/15 px-3 sm:px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/25 transition">
                    Explore
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
