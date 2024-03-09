export default function formatDate(inputDate: string) {
  const dateObj = new Date(inputDate);

  // Extract year, month, and day from the date object
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(dateObj.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}