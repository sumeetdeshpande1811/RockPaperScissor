
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const User = require('../models/User');

const options = ['rock', 'paper', 'scissors'];


const getRandomMove = () => options[Math.floor(Math.random() * options.length)];


const determineResult = (userMove, computerMove) => {
  if (userMove === computerMove) return 'draw';
  if ((userMove === 'rock' && computerMove === 'scissors') ||
      (userMove === 'paper' && computerMove === 'rock') ||
      (userMove === 'scissors' && computerMove === 'paper')) {
    return 'win';
  }
  return 'lose';
};

router.post('/move', authenticate, async (req, res) => {
  const { username,result } = req.body;
  

  try {
    const user = await User.findOne({username:username});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (result === 'win') {
      user.wins=user.wins+1;
    } else if (result === 'lose') {
      user.losses=user.losses+1;
    } else {
      user.draws=user.draws+1;
    }

    await user.save();
    res.json({ wins:user.wins,losses:user.losses,draws: user.draws});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/results', authenticate, async (req, res) => {
    const { username } = req.query;
  
    try {
        const user = await User.findOne( {username} );

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json({ wins:user.wins,losses:user.losses,draws:user.draws });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
});

module.exports = router;
