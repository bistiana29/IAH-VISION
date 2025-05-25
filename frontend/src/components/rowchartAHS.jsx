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

const RowChartAHS = ({ year, provinceFilter }) => {
  // Provinces for the Y-axis
  const provinces = [
    "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "RIAU", "JAMBI", "SUMATERA SELATAN", 
    "BENGKULU", "LAMPUNG", "KEP. BANGKA BELITUNG", "KEPULAUAN RIAU", "DKI JAKARTA", 
    "JAWA BARAT", "JAWA TENGAH", "D I YOGYAKARTA", "JAWA TIMUR", "BANTEN", "BALI", 
    "NUSA TENGGARA BARAT", "NUSA TENGGARA TIMUR", "KALIMANTAN BARAT", "KALIMANTAN TENGAH", 
    "KALIMANTAN SELATAN", "KALIMANTAN TIMUR", "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
    "SULAWESI TENGGARA", "GORONTALO", "SULAWESI BARAT", "MALUKU", "MALUKU UTARA", "PAPUA BARAT", "PAPUA"
  ];

  // AHS values for each province (based on the data you provided)
  const ahsValues = [
    14.39, 13.49, 14.3, 13.42, 13.14, 12.64, 13.75, 12.78, 12.49, 13.27, 
    13.51, 12.8, 12.86, 15.7, 13.43, 13.1, 13.62, 13.98, 13.23, 12.68, 
    12.77, 12.87, 14.03, 12.97, 13.34, 13.55, 13.71, 13.17, 12.89, 14.09, 
    13.75, 13.17, 13.72
  ];

  // Combine data into an array of objects for easier manipulation
  const provinceData = provinces.map((province, index) => ({
    province: province,
    ahs: ahsValues[index]
  }));

  // Sort the data by AHS value in ascending order and filter bottom 10 provinces
  const bottom10Provinces = provinceData
    .sort((a, b) => a.ahs - b.ahs) // Sort in ascending order by AHS to get the lowest
    .slice(0, 10); // Get bottom 10 provinces

  // Extract the provinces and AHS values for the bottom 10
  const bottom10ProvincesNames = bottom10Provinces.map(item => item.province);
  const bottom10ProvincesAHS = bottom10Provinces.map(item => item.ahs);

  // Calculate the average AHS of the bottom 10 provinces
  const averageAHS = bottom10ProvincesAHS.reduce((acc, val) => acc + val, 0) / bottom10ProvincesAHS.length;

  // Chart Data
  const data = {
    labels: bottom10ProvincesNames, // Provinces for the Y-axis
    datasets: [
      {
        label: `AHS Tahun ${year}`,
        data: bottom10ProvincesAHS, // AHS values for the X-axis
        backgroundColor: "rgba(0, 0, 139, 0.5)", 
        borderColor: "rgba(0, 0, 139, 1)", 
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
        text: `10 Provinsi terendah tahun ${year}`,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts at 0 (representing AHS value)
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
      <p>Rata-rata AHS 10 provinsi terendah: <strong>{averageAHS.toFixed(2)}</strong></p>
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default RowChartAHS;
