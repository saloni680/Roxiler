// src/components/Table.js
import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/api';
import './Table.css'
const Table = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await fetchTransactions(month, search, page, perPage);
      setTransactions(data);
      console.log(data);
    };
    getTransactions();
  }, [month, search, page, perPage]);

  return (
    <div style={{width:'80%'}}>
      <center>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      </center>
    </div>
  );
};

export default Table;
