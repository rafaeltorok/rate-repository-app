// Formats the output using the k (thousands) or m (millions) syntax
export default function formatNumber(number) {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}m`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return String(number);
}
