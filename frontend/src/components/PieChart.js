// src/components/PieChart.js
import React, { useState, useEffect } from 'react';
import { fetchPieChart } from '../api/api';
import { PieChart, Pie, Tooltip } from 'recharts';

const PieChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPieChart = async () => {
      const chartData = await fetchPieChart(month);
      setData(chartData);
    };
    getPieChart();
  }, [month]);

  // Array of colors for pie segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF5733'];

  return (
    <div>
      <h1>PieChart</h1>
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#00C49F"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text
              x={x}
              y={y}
              fill="#00C49F"
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {data[index].category}
            </text>
          );
        }}
      />
      <Tooltip />
    </PieChart>
    </div>
  );
};

export default PieChartComponent;
