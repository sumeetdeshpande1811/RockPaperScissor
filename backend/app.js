
const dotenv = require("dotenv");

dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const healthRoutes=require('./routes/healthRoutes');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use( authRoutes);
app.use( healthRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
