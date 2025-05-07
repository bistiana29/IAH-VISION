import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TransparentLineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="tahun" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="nilai" stroke="#10b981" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default TransparentLineChart;
