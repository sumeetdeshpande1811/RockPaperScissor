import React from "react";
import './Navbar.css'; // Import the CSS file

const Navbar = ({ handleLogout }) => (
  <nav style={navStyle}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <h3 id="welcome" style={welcomeStyle}>
          Welcome {localStorage.getItem("name")}{" "}
          <button style={btnStyle} onClick={handleLogout} id="logout">
            Logout
          </button>
        </h3>
      </li>
    </ul>
  </nav>
);

const navStyle = {
  padding: '1rem',
};

const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center', 
};

const liStyle = {
  marginRight: '1rem',
};

const welcomeStyle = {
  marginBottom: '0.5rem', 
};

const btnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#ff69b4',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '600px',
  width: "100px",
  height: "30px",
};

export default Navbar;
