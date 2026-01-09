import { MapPin, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRegion } from "../context/RegionContext";
import { getDisplayPrice, formatMoney } from "../../data/pricing";

export default function TrendingHolidayCard({ item }) {
  const { region } = useRegion();
  const { currency, amount } = getDisplayPrice(item.basePriceUSD, region);
  const priceText = formatMoney(amount, currency);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="grid sm:grid-cols-[200px_1fr]">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="h-44 w-full object-cover sm:h-full"
          />
          {item.tag ? (
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
              {item.tag}
            </span>
          ) : null}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-700">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.city}, {item.country}
                </span>
              </p>
              <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                {item.days}D / {item.nights}N package
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-neutral-500">Package</p>
              <p className="text-xl font-semibold text-neutral-900">
                {priceText}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                ⭐ {item.rating} ({item.reviews})
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {(item.includes || []).slice(0, 4).map((inc) => (
              <span
                key={inc}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-800"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                {inc}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-500 inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Starts {item.startDate || "Flexible"}
            </p>
            <button className="w-full sm:w-auto rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
