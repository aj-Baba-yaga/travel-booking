import { Plane, Hotel, Luggage } from "lucide-react";

const TABS = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "holidays", label: "Holidays", icon: Luggage },
];

export default function HeroTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-flex min-w-max rounded-2xl bg-white/95 p-1 shadow-sm backdrop-blur">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={[
                "flex items-center gap-2 rounded-2xl px-3 sm:px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-amber-500 text-white"
                  : "text-neutral-700 hover:bg-neutral-100",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
