// BarChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "2018", value: 4000 },
  { name: "2019", value: 3000 },
  { name: "2020", value: 2000 },
  { name: "2021", value: 2780 },
  { name: "2022", value: 1890 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
