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

interface IChartData {
  name: string;
  sales: number;
  profit: number;
}

const DarkLineChart: React.FC<any> = ({ data }: { data: IChartData[] }) => {
  return (
    <div className="bg-primary_200 text-gray-100 rounded-md p-6 shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Estimation</h2>
        <p className="text-sm text-gray-400">2024 Q1 - Q4</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#f9fafb',
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={false}
            fill="url(#colorSales)"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={false}
            fill="url(#colorProfit)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DarkLineChart;
