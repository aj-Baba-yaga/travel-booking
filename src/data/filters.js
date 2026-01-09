export function matchesDestination(item, destination) {
  const query = (destination || "").toLowerCase();

  // Flights
  if (item.type === "flights") {
    const from = (item.from || "").toLowerCase();
    const to = (item.to || "").toLowerCase();
    return from.includes(query) || to.includes(query);
  }

  // Hotels
  if (item.type === "hotels") {
    const city = (item.city || "").toLowerCase();
    const country = (item.country || "").toLowerCase();
    const title = (item.title || "").toLowerCase();
    return (
      city.includes(query) || country.includes(query) || title.includes(query)
    );
  }

  // Holidays
  const city = (item.city || "").toLowerCase();
  const country = (item.country || "").toLowerCase();
  const title = (item.title || "").toLowerCase();
  return (
    city.includes(query) || country.includes(query) || title.includes(query)
  );
}
