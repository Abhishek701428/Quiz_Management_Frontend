import axios from 'axios';

const API_URL = 'https://quiz-management-backend.onrender.com/api';

export const loginUser = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data.token;
};

export const registerUser = async (details) => {
  const { data } = await axios.post(`${API_URL}/register`, details);
  return data;
};
