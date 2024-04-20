// src/components/Game.js
import React, { useState } from 'react';
import axios from 'axios';

const Game = ({ history }) => {
  const [userChoice, setUserChoice] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [userStats, setUserStats] = useState(null);

  const handleMove = async (move) => {
    setUserChoice(move);
    try {
      const response = await axios.post('http://localhost:8000/game/move', { move });
      setGameResult(response.data.result);
      fetchUserStats(); // Update user stats after each game
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const fetchUserStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile');
      setUserStats(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    history.push('/'); // Redirect to login page
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      <div>
        <button onClick={() => handleMove('rock')}>Rock</button>
        <button onClick={() => handleMove('paper')}>Paper</button>
        <button onClick={() => handleMove('scissors')}>Scissors</button>
      </div>
      <div>
        <h3>Your Choice: {userChoice}</h3>
        {gameResult && <p>Game Result: {gameResult}</p>}
      </div>
      {userStats && (
        <div>
          <p>Wins: {userStats.wins}</p>
          <p>Losses: {userStats.losses}</p>
          <p>Draws: {userStats.draws}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Game;
