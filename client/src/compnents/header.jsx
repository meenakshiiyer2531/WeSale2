import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'grey',
    color: '#fff', 
    padding: '0px',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    padding: '0',
    marginRight: '10px', 
  };

  const liStyle = {
  
    margin: '0 15px',
    cursor: 'pointer',
  };


  const logoStyle = {
    width: '190px', 
    height: '90px',
    marginRight: '70px', 
    marginLeft: '20px',
  };

  return (
    <header style={headerStyle}>
      <img
        src="/logo.jpg" 
        alt="Your Logo"
        style={logoStyle}
      />
    
      <ul style={navStyle}>
        <li style={liStyle}>Help</li>
        <li style={liStyle}>Login</li>
        {/* <li style={liStyle}>Contact</li> */}
      </ul>
    
    </header>
  );
}


export default Header;