// src/data/trending.hotels.js

export const trendingHotels = [
  {
    id: "HT-001",
    type: "hotels",
    title: "Aurora Grand Resort",
    image: "/images/trending/hotel-1.jpg",
    tag: "Featured",

    city: "Santorini",
    country: "Greece",
    nights: 3,
    roomType: "Sea View Suite",
    amenities: ["Breakfast", "Wi-Fi", "Pool"],
    checkIn: "2026-03-14",
    checkOut: "2026-03-17",

    basePriceUSD: 249,
    regionTier: "premium",

    rating: 4.8,
    reviews: 2680,
  },
  {
    id: "HT-002",
    type: "hotels",
    title: "City Center Boutique Stay",
    image: "/images/trending/hotel-2.jpg",
    tag: "-10%",

    city: "London",
    country: "United Kingdom",
    nights: 2,
    roomType: "Deluxe Room",
    amenities: ["Wi-Fi", "Gym", "24h Desk"],
    checkIn: "2026-02-02",
    checkOut: "2026-02-04",

    basePriceUSD: 179,
    regionTier: "standard",

    rating: 4.5,
    reviews: 1425,
  },
  {
    id: "HT-003",
    type: "hotels",
    title: "Budget Comfort Inn",
    image: "/images/trending/hotel-3.jpg",

    city: "Bangkok",
    country: "Thailand",
    nights: 4,
    roomType: "Standard Room",
    amenities: ["Wi-Fi", "AC", "Breakfast"],
    checkIn: "2026-01-20",
    checkOut: "2026-01-24",

    basePriceUSD: 69,
    regionTier: "budget",

    rating: 4.3,
    reviews: 980,
  },
];
