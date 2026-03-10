export const calculateAverageRating = (feedbacks) => {
  if (!feedbacks || feedbacks.length === 0) return 0;

  const total = feedbacks.reduce((sum, f) => sum + f.rating, 0);
  return (total / feedbacks.length).toFixed(1);
};

export const formatFeedbackDate = (date) => {
  return new Date(date).toLocaleDateString();
};
