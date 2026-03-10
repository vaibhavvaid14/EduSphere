import axios from "axios";

const API = "/api/feedback";

export const submitFeedback = async (data) => {
  const res = await axios.post(`${API}/submit`, data);
  return res.data;
};

export const getStudentFeedback = async () => {
  const res = await axios.get(`${API}/student`);
  return res.data;
};

export const getCourseFeedback = async (courseId) => {
  const res = await axios.get(`${API}/course/${courseId}`);
  return res.data;
};

export const getFeedbackAnalytics = async () => {
  const res = await axios.get(`${API}/analytics`);
  return res.data;
};
