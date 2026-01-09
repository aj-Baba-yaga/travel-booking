// src/data/index.js

import { trendingFlights } from "./trending.flights";
import { trendingHotels } from "./trending.hotels";
import { trendingHolidays } from "./trending.holidays";

export const CATEGORIES = [
  { id: "flights", label: "Flights" },
  { id: "hotels", label: "Hotels" },
  { id: "holidays", label: "Holidays" },
];

export const getAllTrending = () => [
  ...trendingFlights,
  ...trendingHotels,
  ...trendingHolidays,
];

export const getTrendingByType = (type) =>
  getAllTrending().filter((item) => item.type === type);
