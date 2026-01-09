import { useEffect, useState } from "react";
import { MapPin, Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "flights", label: "Flights" },
  { id: "hotels", label: "Hotels" },
  { id: "holidays", label: "Holidays" },
  { id: "cabs", label: "Cabs" },
  { id: "buses", label: "Buses" },
  { id: "cruise", label: "Cruise" },
];

export default function Navbar({ onOpenAuth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    // prevent background scroll when drawer is open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all",
          isScrolled
            ? "bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm"
            : "bg-white/80 backdrop-blur",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-semibold">
                Q
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-neutral-900">
                  Quix Travel
                </div>
                <div className="text-xs text-neutral-500 -mt-0.5">
                  Explore the world
                </div>
              </div>
            </div>

            {/* Links (desktop) */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className="hover:text-neutral-950 transition"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-neutral-700 hover:bg-white transition">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>Anywhere</span>
              </button>

              <button className="grid h-10 w-10 place-items-center rounded-full bg-amber-500 text-white hover:bg-amber-600 transition">
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white/70 text-neutral-900 hover:bg-white transition"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={[
          "fixed inset-0 z-60 md:hidden transition",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={[
            "absolute inset-0 bg-black/50 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 p-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-semibold">
                Q
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Quix Travel
                </div>
                <div className="text-xs text-neutral-500 -mt-0.5">Menu</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold">Anywhere</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                Choose destinations and explore deals.
              </p>
            </div>

            <div className="mt-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-left text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAuth?.("signin");
                }}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAuth?.("signup");
                }}
                className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
