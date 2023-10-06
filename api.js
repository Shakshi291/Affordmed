// api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train';

// Function to register the company
export const registerCompany = (data) => {
  return axios.post(`${API_BASE_URL}/register`, data);
};

// Function to obtain the authorization token
export const getAuthToken = (data) => {
  return axios.post(`${API_BASE_URL}/auth`, data);
};

// Function to get all trains
export const getAllTrains = (token) => {
  return axios.get(`${API_BASE_URL}/trains`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Function to get details of a single train
export const getSingleTrain = (trainNumber, token) => {
  return axios.get(`${API_BASE_URL}/trains/${trainNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
