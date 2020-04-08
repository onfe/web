function formattedDate(d) {
  // eslint-disable-next-line prettier/prettier
  const date = new Date(d)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const showYear = date.getFullYear() !== new Date().getFullYear();
  const year = showYear ? `, ${date.getFullYear()}` : "";
  return `${months[date.getMonth()]} ${date.getDate()}${year}`;
}

export {
  formattedDate
}
