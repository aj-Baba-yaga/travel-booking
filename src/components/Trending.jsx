import { getTrendingByType } from "../data";
import TrendingTabs from "./TrendingTabs";
import TrendingFlightCard from "./cards/TrendingFlightCard";
import TrendingHotelCard from "./cards/TrendingHotelCard";
import TrendingHolidayCard from "./cards/TrendingHolidayCard";
import Reveal from "./motion/Reveal";
import StaggerGridTrending from "./StaggerGridTrending";
import { matchesDestination } from "../data/filters";

export default function Trending({
  activeCategory,
  setActiveCategory,
  searchDestination = "",
}) {
  const items = getTrendingByType(activeCategory);

  const destination = (searchDestination || "").trim().toLowerCase();

  const filteredItems = destination
    ? items.filter((item) => matchesDestination(item, destination))
    : items;

  return (
    <section id="trending" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Trending
            </h2>
            <p className="mt-2 text-neutral-600">
              Handpicked deals across flights, hotels, and holiday packages.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8">
            <TrendingTabs
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {filteredItems.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-neutral-900">
                No results found
              </h3>
              <p className="mt-2 text-neutral-600">
                We couldn’t find{" "}
                <span className="font-semibold text-neutral-900">
                  {activeCategory}
                </span>{" "}
                results for{" "}
                <span className="font-semibold text-neutral-900">
                  {searchDestination || "that destination"}
                </span>
                .
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Try a different destination or switch category.
              </p>
            </div>
          ) : (
            <StaggerGridTrending>
              {filteredItems.map((item) => {
                if (item.type === "flights") {
                  return <TrendingFlightCard key={item.id} item={item} />;
                }
                if (item.type === "hotels") {
                  return <TrendingHotelCard key={item.id} item={item} />;
                }
                return <TrendingHolidayCard key={item.id} item={item} />;
              })}
            </StaggerGridTrending>
          )}
        </Reveal>
      </div>
    </section>
  );
}
