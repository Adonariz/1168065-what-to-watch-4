export const formatReviewDate = (dateString) => {
  const date = new Date(dateString);
  date.setUTCDate(date.getDate());

  return date.toISOString().slice(0, 10);
};
