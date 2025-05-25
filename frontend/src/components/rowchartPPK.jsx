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

const RowChartPPK = ({ year, provinceFilter }) => {
  // Provinces for the Y-axis
  const provinces = [
    "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "RIAU", "JAMBI", "SUMATERA SELATAN", 
    "BENGKULU", "LAMPUNG", "KEP. BANGKA BELITUNG", "KEPULAUAN RIAU", "DKI JAKARTA", 
    "JAWA BARAT", "JAWA TENGAH", "D I YOGYAKARTA", "JAWA TIMUR", "BANTEN", "BALI", 
    "NUSA TENGGARA BARAT", "NUSA TENGGARA TIMUR", "KALIMANTAN BARAT", "KALIMANTAN TENGAH", 
    "KALIMANTAN SELATAN", "KALIMANTAN TIMUR", "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
    "SULAWESI TENGGARA", "GORONTALO", "SULAWESI BARAT", "MALUKU", "MALUKU UTARA", "PAPUA BARAT", "PAPUA"
  ];

  // Updated PPK values for each province (based on the data you provided)
  const ppkValues = [
    10.811, 11.46, 11.718, 11.857, 11.621, 12.015, 11.733, 11.258, 13.667, 15.573, 
    19.953, 12.157, 12.276, 15.361, 12.852, 13.097, 14.92, 11.606, 8.534, 10.321, 
    12.303, 13.399, 13.793, 10.197, 11.998, 10.536, 12.275, 10.606, 11.539, 10.208, 
    9.684, 9.32, 8.805, 11.037
  ];

  // Combine data into an array of objects for easier manipulation
  const provinceData = provinces.map((province, index) => ({
    province: province,
    ppk: ppkValues[index]
  }));

  // Sort the data by PPK value in ascending order and filter bottom 10 provinces
  const bottom10Provinces = provinceData
    .sort((a, b) => a.ppk - b.ppk) // Sort in ascending order by PPK to get the lowest
    .slice(0, 10); // Get bottom 10 provinces

  // Extract the provinces and PPK values for the bottom 10
  const bottom10ProvincesNames = bottom10Provinces.map(item => item.province);
  const bottom10ProvincesPPK = bottom10Provinces.map(item => item.ppk);

  // Calculate the average PPK of the bottom 10 provinces
  const averagePPK = bottom10ProvincesPPK.reduce((acc, val) => acc + val, 0) / bottom10ProvincesPPK.length;

  // Chart Data
  const data = {
    labels: bottom10ProvincesNames, // Provinces for the Y-axis
    datasets: [
      {
        label: `Pengeluaran per kapita tahun ${year}`,
        data: bottom10ProvincesPPK, // PPK values for the X-axis
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
        beginAtZero: true, // Ensure the X-axis starts at 0 (representing PPK value)
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
      <p>Rata-rata pengeluaran per kapita 10 provinsi terendah: <strong>{averagePPK.toFixed(2)}</strong></p>
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default RowChartPPK;
