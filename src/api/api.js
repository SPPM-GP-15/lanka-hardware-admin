// src/api/api.js
import axios from 'axios';

const API_URL = 'https://lanka-hardware-9f40e74e1c93.herokuapp.com';

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error registering user');
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error logging in');
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/getAllUsers`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching users');
  }
};

// Update user
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/updateUser/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error updating user');
  }
};
