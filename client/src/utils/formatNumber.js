// Formats the output using the k (thousands) or m (millions) syntax
export default function formatNumber(number) {
  // Guard against invalid numeric values
  if (typeof number !== "number" || !Number.isFinite(number) || number < 0) {
    throw new Error("Invalid number");
  }

  if (number >= 1000000) {
    // Return the "m" suffix
    return `${(number / 1000000).toFixed(1)}m`;
  } else if (number >= 1000) {
    // Return the "k" suffix
    return `${(number / 1000).toFixed(1)}k`;
  }

  // Numbers smaller than a thousand should just be returned
  return String(number);
}
