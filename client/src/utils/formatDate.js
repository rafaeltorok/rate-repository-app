// Format the date into the format (MM-DD-YYYY)
export default function formatDate(date) {
  // Transform the extended input date into an Date object
  const inputDate = new Date(date);

  // Extract the year, month and day
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");  // This method is zero based (January = 0)
  const day = String(inputDate.getDate()).padStart(2, "0");

  // Return the properly formatted date to be displayed on the Reviews section
  return `${month}.${day}.${year}`;
}
