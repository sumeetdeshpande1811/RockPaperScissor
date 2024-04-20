// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });
      const token = response.data.token; 
      localStorage.setItem('token', token); 
      localStorage.setItem('username', username); 
      navigate('/game');
    } catch (error) {
    alert("Invalid Username or password");
      console.error(error.response.data);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label>Username</label>
        </div>
        <div className="input-group">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Password</label>
        </div>
        <div className="button-group">
          <button type="button" onClick={handleLogin}>Login</button>
          <button type="button" onClick={handleSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
