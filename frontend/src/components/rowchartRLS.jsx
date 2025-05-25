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

const RowChartRLS = ({ year, provinceFilter }) => {
  // Provinces for the Y-axis
  const provinces = [
    "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "RIAU", "JAMBI", "SUMATERA SELATAN", 
    "BENGKULU", "LAMPUNG", "KEP. BANGKA BELITUNG", "KEPULAUAN RIAU", "DKI JAKARTA", 
    "JAWA BARAT", "JAWA TENGAH", "D I YOGYAKARTA", "JAWA TIMUR", "BANTEN", "BALI", 
    "NUSA TENGGARA BARAT", "NUSA TENGGARA TIMUR", "KALIMANTAN BARAT", "KALIMANTAN TENGAH", 
    "KALIMANTAN SELATAN", "KALIMANTAN TIMUR", "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
    "SULAWESI TENGGARA", "GORONTALO", "SULAWESI BARAT", "MALUKU", "MALUKU UTARA", "PAPUA BARAT", "PAPUA"
  ];

  // RLS values for each province (based on the data you provided)
  const rlsValues = [
    9.64, 9.93, 9.44, 9.43, 8.9, 8.57, 9.04, 8.36, 8.33, 10.5,
    11.49, 8.87, 8.02, 9.92, 8.28, 9.23, 9.54, 7.87, 8.02, 7.78,
    8.81, 8.62, 10.02, 9.84, 9.04, 8.86, 9.42, 8.29, 8.15, 10.26,
    9.37, 7.86, 9.82
  ];

  // Combine data into an array of objects for easier manipulation
  const provinceData = provinces.map((province, index) => ({
    province: province,
    rls: rlsValues[index]
  }));

  // Sort the data by RLS value in ascending order and filter bottom 10 provinces
  const bottom10Provinces = provinceData
    .sort((a, b) => a.rls - b.rls) // Sort in ascending order by RLS to get the lowest
    .slice(0, 10); // Get bottom 10 provinces

  // Extract the provinces and RLS values for the bottom 10
  const bottom10ProvincesNames = bottom10Provinces.map(item => item.province);
  const bottom10ProvincesRLS = bottom10Provinces.map(item => item.rls);

  // Calculate the average RLS of the bottom 10 provinces
  const averageRLS = bottom10ProvincesRLS.reduce((acc, val) => acc + val, 0) / bottom10ProvincesRLS.length;

  // Chart Data
  const data = {
    labels: bottom10ProvincesNames, // Provinces for the Y-axis
    datasets: [
      {
        label: `RLS Tahun ${year}`,
        data: bottom10ProvincesRLS, // RLS values for the X-axis
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
        text: `10 provinsi terendah tahun ${year}`,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensure the X-axis starts at 0 (representing RLS value)
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
      <p>RLS 10 provinsi terendah: <strong>{averageRLS.toFixed(2)}</strong></p>
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default RowChartRLS;
