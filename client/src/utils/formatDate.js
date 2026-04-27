// Dependencies
import { format, parseISO, isValid } from "date-fns";

// Convert a string input to a valid date format
export default function formatDate(date) {
  if (!date) return "";

  // Parse the date to an ISO format
  const parsedDate = parseISO(date);

  // Check if it is valid
  if (!isValid(parsedDate)) {
    throw new Error(`Invalid date: ${date}`);
  }

  // ISO date
  if (date.includes("T")) {
    const newDate = new Date(date);
    return format(newDate, "dd MMM yyyy");
  }

  // Fallback for format: YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-");
    return format(new Date(year, month - 1, day), "dd MMM yyyy");
  }

  // Unknown format
  throw new Error(`Invalid date format: ${date}`);
}
