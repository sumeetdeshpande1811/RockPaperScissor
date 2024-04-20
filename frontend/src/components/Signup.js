// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/signup', {
        username,
        password,
      });
      console.log(response.data);
      // Redirect to login page after successful signup
      history.push('/login'); // Assuming '/login' is the route for the login page
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <div className="input-group">
        <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Username</label>
      </div>
      <div className="input-group">
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label>
      </div>
      <div className="button-group">
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
