import axios from 'axios';

const API_URL = 'https://quiz-management-backend.onrender.com/api/quiz';

export const getAllQuizzes = async () => {
  const { data } = await axios.get(`${API_URL}`);
  return data;
};

export const getQuizDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const submitQuiz = async (id, answers) => {
  const { data } = await axios.post(`${API_URL}/${id}/take`, { answers });
  return data;
};
