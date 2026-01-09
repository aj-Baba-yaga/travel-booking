import { useMemo, useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { topDestinations } from "../data/destinations";

export default function HeroSearch({ activeCategory, onSearch }) {
  const destinations = useMemo(() => topDestinations, []);
  const [destination, setDestination] = useState(destinations?.[0]?.name || "");

  // UI-only placeholders for now (we’ll make real later)
  const dateLabel =
    activeCategory === "flights" ? "Depart — Return" : "Check-in — Check-out";
  const travelersLabel =
    activeCategory === "flights" ? "1 Adult, Economy" : "2 Guests, 1 Room";

  const handleSearch = () => {
    onSearch?.({
      type: activeCategory,
      destination,
    });
  };

  return (
    <div className="rounded-2xl bg-white/95 p-3 shadow-md backdrop-blur">
      <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
        {/* Destination */}
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 grid place-items-center">
            <Search className="h-5 w-5 text-emerald-600" />
          </div>

          <div className="flex-1">
            <div className="text-xs font-medium text-neutral-500">
              Destination
            </div>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-0.5 w-full bg-transparent text-sm font-semibold text-neutral-900 outline-none"
            >
              {destinations.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dates (UI only for now) */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-left hover:bg-neutral-50 transition"
        >
          <div className="h-10 w-10 rounded-xl bg-amber-50 grid place-items-center">
            <CalendarDays className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <div className="text-xs font-medium text-neutral-500">Dates</div>
            <div className="mt-0.5 text-sm font-semibold text-neutral-900">
              {dateLabel}
            </div>
          </div>
        </button>

        {/* Travelers (UI only for now) */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-left hover:bg-neutral-50 transition"
        >
          <div className="h-10 w-10 rounded-xl bg-emerald-50 grid place-items-center">
            <Users className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <div className="text-xs font-medium text-neutral-500">
              Travellers
            </div>
            <div className="mt-0.5 text-sm font-semibold text-neutral-900">
              {travelersLabel}
            </div>
          </div>
        </button>

        {/* Search button */}
        <button
          type="button"
          onClick={handleSearch}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition"
        >
          <Search className="h-5 w-5" />
          Search
        </button>
      </div>
    </div>
  );
}
