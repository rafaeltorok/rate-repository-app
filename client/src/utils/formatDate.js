// Dependencies
import { format } from "date-fns";

// Format the date to DD MMM YYYY
export default function formatDate(date) {
  // Transform the extended input date into an Date object
  const inputDate = new Date(date);

  // Use the date-fns library to format
  const outputDate = format(inputDate, "dd MMM yyyy");

  // Return the properly formatted date to be displayed on the Reviews section
  return outputDate;
}
