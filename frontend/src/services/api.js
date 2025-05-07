import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000', // URL backend FastAPI
});

export const getAllData = (params) => API.get('/data', { params });
export const getFactors = () => API.get('/factors');
export const getPrediction = (year, region) => API.get(`/prediction/${year}`, { params: { region } });
export const getClusters = (year) => API.get(`/clusters/${year}`);
export const getRecommendations = () => API.get('/recommendations');
