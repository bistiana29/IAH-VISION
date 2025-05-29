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
  const res = await fetch(`${API_BASE}/cluster/${year}`);
  if (!res.ok) throw new Error('Failed to fetch cluster data');
  return res.json();
};
