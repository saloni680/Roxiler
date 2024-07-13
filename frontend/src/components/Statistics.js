// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../api/api';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

  useEffect(() => {
    const getStatistics = async () => {
      const data = await fetchStatistics(month);
      setStatistics(data);
    };
    getStatistics();
  }, [month]);

  return (
    <div style={{ 
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      width:'30%',
      fontSize:'25px'
    }}>
      <h1>Statistics</h1>
      <div style={{ marginBottom: '10px' }}>Total Sale Amount: <span style={{ fontWeight: 'bold' }}>{statistics.totalSaleAmount}</span></div>
      <div style={{ marginBottom: '10px' }}>Total Sold Items: <span style={{ fontWeight: 'bold' }}>{statistics.totalSoldItems}</span></div>
      <div>Total Not Sold Items: <span style={{ fontWeight: 'bold' }}>{statistics.totalNotSoldItems}</span></div>
    </div>
  );
};

export default Statistics;
