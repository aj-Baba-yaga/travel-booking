// src/data/trending.flights.js

export const trendingFlights = [
  {
    id: "FL-001",
    type: "flights",
    title: "Skyline Saver Deal",
    image: "/images/trending/flight-1.jpg",
    tag: "Featured",

    from: "New York (JFK)",
    to: "Los Angeles (LAX)",
    departDate: "2026-02-10",
    returnDate: "2026-02-16",
    tripType: "Round-trip",

    airline: "SkyJet Airways",
    stops: 0,
    duration: "6h 05m",

    basePriceUSD: 399,
    regionTier: "standard",

    rating: 4.6,
    reviews: 1280,
  },
  {
    id: "FL-002",
    type: "flights",
    title: "Weekend City Hop",
    image: "/images/trending/flight-2.jpg",
    tag: "-15%",

    from: "London (LHR)",
    to: "Paris (CDG)",
    departDate: "2026-01-24",
    returnDate: null,
    tripType: "One-way",

    airline: "EuroWings Express",
    stops: 0,
    duration: "1h 20m",

    basePriceUSD: 119,
    regionTier: "budget",

    rating: 4.4,
    reviews: 860,
  },
  {
    id: "FL-003",
    type: "flights",
    title: "Sunset Beach Escape",
    image: "/images/trending/flight-3.jpg",
    tag: "Best Value",

    from: "Dubai (DXB)",
    to: "Maldives (MLE)",
    departDate: "2026-03-05",
    returnDate: "2026-03-10",
    tripType: "Round-trip",

    airline: "Gulf Horizon",
    stops: 1,
    duration: "5h 35m",

    basePriceUSD: 589,
    regionTier: "premium",

    rating: 4.8,
    reviews: 2140,
  },
];
