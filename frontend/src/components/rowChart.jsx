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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RowChart = ({ data, valueKey = "nilai", labelKey = "provinsi", title = "" }) => {
  const cleanedData = data.map(d => ({
    ...d,
    [valueKey]: parseFloat(d[valueKey]) || 0,
  }));

  const sortedData = [...cleanedData].sort((a, b) => b[valueKey] - a[valueKey]);
  const labels = sortedData.map((d) => d[labelKey]);
  const values = sortedData.map((d) => d[valueKey]);

  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values) * 1.1;

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: "#1e88e5",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          color: "#ffffff"
        },
      },
      title: {
         display: true, 
         text: title,
         color: "#ffffff"
         },
    },
    scales: {
      x: {
        min: minValue,
        max: maxValue,
      },
      y: {
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
            weight: 'normal',
          },
          maxRotation: 0,
          autoSkip: false,
          padding: 13,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        height: Math.min(data.length * 40, 600),
        overflowY: "auto",
        paddingLeft: 60, // ruang ekstra supaya label y terlihat utuh
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default RowChart;
