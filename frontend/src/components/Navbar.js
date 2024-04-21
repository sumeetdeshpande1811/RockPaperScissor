import React from "react";

const Navbar = ({ handleLogout }) => (
  <nav style={navStyle}>
    <ul style={ulStyle}>
      <li style={liStyle}><button style={btnStyle} onClick={handleLogout}>Logout</button></li>
    </ul>
  </nav>
);

// CSS styles
const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'right',
  padding: '1rem', // Adjust as needed for spacing
  
};

const ulStyle = {
  listStyleType: 'none',
};

const liStyle = {
  marginRight: '1rem', 

};

const btnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '65rem', 
};

export default Navbar;
