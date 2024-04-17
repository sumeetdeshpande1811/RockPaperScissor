const express = require('express');

const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());



app.use( authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
