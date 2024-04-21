

const express = require('express');

const mongoose = require('mongoose');



const router = express.Router();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  

router.get('/healthz', async (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.status(200).send('MongoDB connection is healthy.');
      } else {
        res.status(400).send('MongoDB connection is not healthy.');
      }
});



module.exports = router;
