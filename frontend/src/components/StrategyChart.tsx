import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface StrategyStat {
  name: string;
  winRate: number;
}

const COLORS = ['#FF5733', '#FFC300', '#33FF57', '#339CFF', '#C733FF'];

interface StrategyChartProps {
  data: StrategyStat[];
}

export default function StrategyChart({ data }: StrategyChartProps) {
  const chartData = data.map((stat) => ({
    name: stat.name,
    value: stat.winRate,
  }));

  return (
    <div className="w-full h-80 p-4 bg-black/30 rounded-xl shadow">
      <h2 className="text-xl font-bold text-white text-center mb-4">Strategy Win Rates</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
            label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
