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

const RowChartAHH = ({ year, provinceFilter }) => {
  // Provinces for the Y-axis
  const provinces = [
    "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "RIAU", "JAMBI", "SUMATERA SELATAN", 
    "BENGKULU", "LAMPUNG", "KEP. BANGKA BELITUNG", "KEPULAUAN RIAU", "DKI JAKARTA", 
    "JAWA BARAT", "JAWA TENGAH", "D I YOGYAKARTA", "JAWA TIMUR", "BANTEN", "BALI", 
    "NUSA TENGGARA BARAT", "NUSA TENGGARA TIMUR", "KALIMANTAN BARAT", "KALIMANTAN TENGAH", 
    "KALIMANTAN SELATAN", "KALIMANTAN TIMUR", "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
    "SULAWESI TENGGARA", "GORONTALO", "SULAWESI BARAT", "MALUKU", "MALUKU UTARA", "PAPUA BARAT", "PAPUA"
  ];

  // Actual AHH values for each province
  const ahhValues = [
    70.485, 70.33, 70.38, 72.57, 72.09, 70.975, 70.18, 71.55, 71.535, 71.285, 
    74.18, 74.41, 75.1, 75.53, 72.395, 71.065, 73.34, 67.78, 68.035, 71.6, 70.475, 
    69.695, 75.055, 72.745, 69.465, 71.48, 71.65, 69.14, 66.32, 67.005, 69.32, 67.1, 
    68.775
  ];

  // Combine data into an array of objects for easier manipulation
  const provinceData = provinces.map((province, index) => ({
    province: province,
    ahh: ahhValues[index]
  }));

  // Sort the data by AHH value in descending order and filter top 10 provinces
  const top10Provinces = provinceData
    .sort((a, b) => b.ahh - a.ahh) // Sort in descending order by AHH
    .slice(0, 10); // Get top 10 provinces

  // Extract the provinces and AHH values for the top 10
  const top10ProvincesNames = top10Provinces.map(item => item.province);
  const top10ProvincesAHH = top10Provinces.map(item => item.ahh);

  // Calculate the average AHH of the top 10 provinces
  const averageAHH = top10ProvincesAHH.reduce((acc, val) => acc + val, 0) / top10ProvincesAHH.length;

  // Chart Data
  const data = {
    labels: top10ProvincesNames, // Provinces for the Y-axis
    datasets: [
      {
        label: `AHH Tahun ${year}`,
        data: top10ProvincesAHH, // AHH values for the X-axis
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
        text: `Top 10 Provinsi AHH Tahun ${year}`,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts at 0 (representing AHH value)
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
      <p>Rata-rata AHH Top 10 Provinsi: <strong>{averageAHH.toFixed(2)}</strong></p>
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default RowChartAHH;
