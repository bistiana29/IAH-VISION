import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="tahun" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="nilai" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
