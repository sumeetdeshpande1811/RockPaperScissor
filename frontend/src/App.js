// src/App.js
import React from 'react';
 import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
 import Login from './components/Login';
 import Signup from './components/Signup';
import Games from './components/Games';
// import Games from './components/Games'
import Profile from './components/Profile';


function App() {
  //const isAuthenticated = localStorage.getItem('token'); 

  return (
   
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/game"
          element={<Games />}
        />

      </Routes>
    </Router>
  );
}

export default App;
