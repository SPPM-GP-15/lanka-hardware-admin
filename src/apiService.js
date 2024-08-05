import axios from 'axios';

const API_URL = 'https://lanka-hardware-9f40e74e1c93.herokuapp.com';

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/getAllUsers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Update User
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/updateUser/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
