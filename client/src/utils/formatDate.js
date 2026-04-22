// Dependencies
import { format } from "date-fns";

// Convert a string input to a valid date format
export default function formatDate(date) {
  // Transform the extended input date into an Date object
  const inputDate = new Date(date);

  // Use the date-fns library for the desired format
  const outputDate = format(inputDate, "dd MMM yyyy");

  // Return the proper date format to be displayed on the Reviews section
  return outputDate;
}
