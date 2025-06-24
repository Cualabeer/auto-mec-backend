
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bookingsRoute = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use(bookingsRoute);

app.get('/', (req, res) => {
  res.send('✅ Auto-Mec backend is live!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
