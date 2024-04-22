// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css'; 

const Signup = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
  
      if (!username.includes('@')) {
       alert('Username must be an email address.');
        return;
      }

      const response = await axios.post('http://localhost:8000/signup', {
        username,
        password,
        name,
      });
  
    
        alert("created Successfully");
        navigate('/login');
      
      console.log("herere");

    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        alert('Username already exists. Please choose a different one.');
      }
      else{
        alert('An error occurred. Please try again later.');
      }

    }
  };

  return (
   
    <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-lg-6 col-md-8">
        <div className="card p-4">
        <h2 className="text-center mb-4">✨ Signup 📝</h2>
          <form>
          <div className="mb-3">
       
              <input type="text" className="form-control-3" placeholder='Name' id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
             
              <input type="text" className="form-control" placeholder='Email' id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
   
              <input type="password" className="form-control-1" placeholder='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="mb-3 d-grid">
              <button type="button" className="btn btn-primary btn-lg" onClick={handleSignup}>Register</button>
            </div>
            <p className="mb-0 text-center" id="register"> Already have an account?  <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;
