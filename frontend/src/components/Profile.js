
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile'); // Assuming '/profile' is the route for fetching user stats
        setUserStats(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchUserStats();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {userStats && (
        <div>
          <p>Username: {userStats.username}</p>
          <p>Wins: {userStats.wins}</p>
          <p>Losses: {userStats.losses}</p>
          <p>Draws: {userStats.draws}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
