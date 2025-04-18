const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Order service connected to MongoDB'))
  .catch(err => console.log(err));

app.post('/order', (req, res) => {
  res.json({ message: 'Order placed successfully!' });
});

app.listen(3005, () => {
  console.log('Order service running on port 3001');
});
