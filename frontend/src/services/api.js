// // src/services/api.js
import axios from 'axios';

// const API_BASE = 'http://localhost:8000/api'; // ganti sesuai backend

// // export const getAHHData = async () => axios.get(`${API_BASE}/ahh`);
// // export const getHLSData = async () => axios.get(`${API_BASE}/hls`);
// // export const getRLSData = async () => axios.get(`${API_BASE}/rls`);
// // export const getPPKData = async () => axios.get(`${API_BASE}/ppk`);
// export const getClusterData = async (year) => {
//   const res = await fetch(`${API_BASE}/cluster/${year}`);
//   if (!res.ok) throw new Error('Failed to fetch cluster data');
//   return res.json();
// };
// export const getPrediksi = async (input) => axios.post(`${API_BASE}/prediksi`, input);

const API_BASE = 'http://localhost:8000/api';

export const getClusterData = async (year) => {
  try {
    const res = await fetch(`${API_BASE}/cluster/${year}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch cluster data error:", error);
    throw error;
  }
};

export const getPrediksiProvinsi = async (provinsi) => {
  try {
    const response = await axios.get(`${API_BASE}/forecast/provinsi/${provinsi}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching prediction data:", error);
    throw error;
  }
};

export const getFaktorData = async (factor, year, category) => {
  try {
    const response = await axios.get(`${API_BASE}/${factor}/${year}/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${factor}:`, error);
    throw error;
  }
};
