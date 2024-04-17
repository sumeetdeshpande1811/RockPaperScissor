

const express = require('express');



const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
 
    console.log("here after post data");
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
  

    console.log("here after post data");
      res.status(200).json({message: 'login successfully ' });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
