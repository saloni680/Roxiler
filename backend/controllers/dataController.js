// controllers/dataController.js
const axios = require('axios');
const ProductTransaction = require('../models/Transaction');
const seedData = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;
    console.log(transactions);
    await ProductTransaction.deleteMany({});
    await ProductTransaction.insertMany(transactions);
    res.status(200).json({ message: 'Data seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { seedData };
