// src/components/BarChart.js
import React, { useState, useEffect } from 'react';
import { fetchBarChart } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBarChart = async () => {
      const chartData = await fetchBarChart(month);
      setData(chartData);
      console.log(chartData);
    };
    getBarChart();
  }, [month]);

  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
    </div>
  );
};

export default BarChartComponent;

