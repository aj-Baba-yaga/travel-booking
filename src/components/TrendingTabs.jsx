import { CATEGORIES } from "../data";

export default function TrendingTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {CATEGORIES.map((tab) => {
        const active = activeCategory === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active
                ? "bg-amber-500 text-white"
                : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
