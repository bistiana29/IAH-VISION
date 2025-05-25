import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartPrediksi = () => {
  // Example data for IPM values from 2010 to 2026 (real data for 2010-2024, predictions for 2025-2026)
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const ipmValues = [
    67.09, 67.2, 67.4, 68.0, 68.2, 68.5, 68.9, 69.1, 69.5, 69.8, 70.1, 70.5, 70.8, 71.2, 71.5, , ,
  ];
  const ipmPredictions = [ , , , , , , , , , , , , , , , 72.5, 73.0]; // Predicted values for 2025 and 2026

  // Combine actual data and predicted data
  const combinedIPMValues = [...ipmValues, ...ipmPredictions];

  // Chart data
  const data = {
    labels: years,
    datasets: [
      {
        label: "IPM (Tahun 2010-2024)",
        data: ipmValues,
        borderColor: "rgba(0, 0, 139, 1)", // Line color for years 2010-2024
        backgroundColor: "rgba(0, 0, 139, 0.2)",
        fill: false,
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: "Prediksi IPM (Tahun 2025-2026)",
        data: ipmPredictions,
        borderColor: "rgba(255, 99, 132, 1)", // Line color for predictions
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Prediksi IPM Tahun 2010-2026",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tahun",
        },
      },
      y: {
        title: {
          display: true,
          text: "Nilai IPM",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartPrediksi;
