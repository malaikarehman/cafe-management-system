const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/order', async (req, res) => {
  const orderRes = await axios.post('http://order-service:3001/order', req.body);
  const paymentRes = await axios.post('http://payment-service:3002/pay', req.body);
  const inventoryRes = await axios.post('http://inventory-service:3003/update', req.body);
  const loyaltyRes = await axios.post('http://loyalty-service:3004/points', req.body);

  res.json({
    order: orderRes.data,
    payment: paymentRes.data,
    inventory: inventoryRes.data,
    loyalty: loyaltyRes.data
  });
});

app.listen(3000, () => {
  console.log('API Gateway running on 3000');
});
