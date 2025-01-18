import axios from 'axios';

const API_URL = 'https://api.example.com';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${API_URL}/auth/register`, user);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Add more API services as needed
