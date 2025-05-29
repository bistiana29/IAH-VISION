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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = ({ title, label, actualData, predictedData, color }) => {
  const years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
  ];

  const data = {
    labels: years,
    datasets: [
      {
        label: `${label}`,
        data: actualData,
        borderColor: color.actual,
        backgroundColor: `${color.actual}33`,
        fill: false,
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: `Prediksi ${label}`,
        data: predictedData,
        borderColor: color.predicted,
        backgroundColor: `${color.predicted}66`,
        fill: false,
        pointStyle: "circle",
        pointRadius: 4,
        pointHoverRadius: 5,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
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
          text: label,
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;