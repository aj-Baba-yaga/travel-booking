// src/data/pricing.js

// 1) Region multipliers (your location-based pricing layer)
export const REGION_MULTIPLIERS = {
  US: 1.0,
  EU: 1.08,
  IN: 0.75,
  SEA: 0.85,
  OTHER: 1.0,
};

// 2) Currency per region
export const REGION_CURRENCY = {
  US: "USD",
  EU: "EUR",
  IN: "INR",
  SEA: "USD",
  OTHER: "USD",
};

// 3) Fixed demo conversion rates (swap later for live rates)
export const USD_TO = {
  USD: 1,
  INR: 83, // example: 1 USD ≈ ₹83
  EUR: 0.92, // example: 1 USD ≈ €0.92
};

// -------- Price helpers --------

export function getAdjustedPriceUSD(basePriceUSD, region) {
  const base = Number(basePriceUSD) || 0;
  const mult = REGION_MULTIPLIERS[region] ?? REGION_MULTIPLIERS.OTHER;
  return Math.max(0, Math.round(base * mult));
}

export function convertFromUSD(usdAmount, currency) {
  const rate = USD_TO[currency] ?? 1;
  return Math.round((Number(usdAmount) || 0) * rate);
}

export function formatMoney(amount, currency) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);
}

/**
 * Use in cards:
 * const { currency, amount } = getDisplayPrice(item.basePriceUSD, region);
 * const priceText = formatMoney(amount, currency);
 */
export function getDisplayPrice(basePriceUSD, region) {
  const currency = REGION_CURRENCY[region] ?? "USD";

  // 1) location-based multiplier applied on base USD price
  const adjustedUSD = getAdjustedPriceUSD(basePriceUSD, region);

  // 2) convert adjusted USD to the region currency
  const converted = convertFromUSD(adjustedUSD, currency);

  return { currency, amount: converted };
}

// -------- Region detection (VPN-friendly, NO CACHE) --------

// EU and SEA country buckets for mapping country_code -> region
const EU_COUNTRIES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]);

const SEA_COUNTRIES = new Set([
  "SG",
  "TH",
  "ID",
  "PH",
  "MY",
  "VN",
  "KH",
  "LA",
  "MM",
  "BN",
  "TL",
]);

function countryToRegion(countryCode) {
  const cc = (countryCode || "").toUpperCase();

  if (cc === "IN") return "IN";
  if (cc === "US") return "US";
  if (EU_COUNTRIES.has(cc)) return "EU";
  if (SEA_COUNTRIES.has(cc)) return "SEA";

  return "OTHER";
}

// Fallback if IP lookup fails
export function detectRegionFromTimezone() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

  if (tz.includes("Kolkata") || tz.includes("Calcutta")) return "IN";
  if (tz.startsWith("Europe/")) return "EU";
  if (tz.startsWith("America/")) return "US";

  if (
    tz.includes("Singapore") ||
    tz.includes("Bangkok") ||
    tz.includes("Jakarta") ||
    tz.includes("Manila") ||
    tz.includes("Kuala_Lumpur") ||
    tz.includes("Ho_Chi_Minh")
  ) {
    return "SEA";
  }

  return "OTHER";
}

/**
 * Detect region based on public IP geolocation (VPN affects this).
 * No caching: always reflects current VPN exit country on refresh.
 */
export async function detectRegionFromIP() {
  try {
    const res = await fetch("https://ipwho.is/?fields=success,country_code", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    if (data?.success && data?.country_code) {
      return countryToRegion(data.country_code);
    }
  } catch {
    // ignore network errors
  }

  return detectRegionFromTimezone();
}
