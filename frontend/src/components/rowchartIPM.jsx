import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RowChartIPM = ({ year, provinceFilter }) => {
  // Data for IPM in 2024
  const provinces = [
    "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "RIAU", "JAMBI", "SUMATERA SELATAN", 
    "BENGKULU", "LAMPUNG", "KEP. BANGKA BELITUNG", "KEPULAUAN RIAU", "DKI JAKARTA", 
    "JAWA BARAT", "JAWA TENGAH", "D I YOGYAKARTA", "JAWA TIMUR", "BANTEN", "BALI", 
    "NUSA TENGGARA BARAT", "NUSA TENGGARA TIMUR", "KALIMANTAN BARAT", "KALIMANTAN TENGAH", 
    "KALIMANTAN SELATAN", "KALIMANTAN TIMUR", "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
    "SULAWESI TENGGARA", "GORONTALO", "SULAWESI BARAT", "MALUKU", "MALUKU UTARA", "PAPUA BARAT", "PAPUA"
  ];

  const ipmValues = [
    74.03, 74.02, 74.49, 74.79, 73.43, 72.3, 73.39, 71.81, 73.33, 77.97, 
    83.08, 74.43, 73.88, 81.55, 74.09, 74.48, 77.76, 70.93, 67.39, 70.13, 
    72.73, 73.03, 78.83, 75.03, 71.56, 74.05, 73.48, 71.23, 68.2, 71.57, 
    71.03, 67.02, 73
  ];

  // Combine data into an array of objects for easier manipulation
  const provinceData = provinces.map((province, index) => ({
    province: province,
    ipm: ipmValues[index]
  }));

  // Sort the data by IPM value in descending order and filter top 10 provinces
  const top10Provinces = provinceData
    .sort((a, b) => b.ipm - a.ipm) // Sort in descending order by IPM
    .slice(0, 10); // Get top 10 provinces

  // Extract the provinces and IPM values for the top 10
  const top10ProvincesNames = top10Provinces.map(item => item.province);
  const top10ProvincesIPM = top10Provinces.map(item => item.ipm);

  // Calculate the average IPM of the top 10 provinces
  const averageIPM = top10ProvincesIPM.reduce((acc, val) => acc + val, 0) / top10ProvincesIPM.length;

  // Chart Data
  const data = {
    labels: top10ProvincesNames, // Provinces for the Y-axis
    datasets: [
      {
        label: `IPM Tahun ${year}`,
        data: top10ProvincesIPM, // IPM values for the X-axis
        backgroundColor: "rgba(0, 0, 139, 0.5)", // Dark Blue with transparency
        borderColor: "rgba(0, 0, 139, 1)", // Solid Dark Blue for border
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Top 10 Provinsi IPM Tahun ${year}`,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts at 0 (representing IPM value)
      },
      y: {
        beginAtZero: true, // Ensure the Y-axis starts at 0 (representing provinces)
        grid: {
          display: false, // Hide grid lines for the Y-axis
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <p>Rata-rata IPM Top 10 Provinsi: <strong>{averageIPM.toFixed(2)}</strong></p>
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default RowChartIPM;
