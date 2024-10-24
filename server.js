const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://arjunchovatiya332:r1bXrMcRxMvIiN3z@marketplace.8n4uo.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch(err => console.error(err));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the DressStore application!' });
  });
  

app.use('/api', productRoutes);