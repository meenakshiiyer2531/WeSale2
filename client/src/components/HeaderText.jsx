import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({ profileData = {} }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { name = "User", profilePicture = null } = profileData;

  const headerStyle = {
    backgroundColor: '#91a5b7',
    color: '#fff',
    padding: '0px 15px',
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and other elements
    alignItems: 'center',
  };

  const navRightStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchStyle = {
    marginRight: '10px',
  };

  const inputStyle = {
    width: '200px', // Smaller search bar
    padding: '8px',
    borderRadius: '20px', // Added border radius for a rounded appearance
    border: 'none',
  };

  const logoStyle = {
    width: '120px', // Logo size as per your earlier UI
    height: '60px',
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const profilePictureStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginLeft: '10px',
  };

  const profileTextStyle = {
    fontSize: '16px',
    color: '#fff',
    marginLeft: '10px',
  };

  return (
    <header style={headerStyle}>
      <img src="/logo.jpg" alt="Your Logo" style={logoStyle} />

      {/* Conditionally render the search bar and profile info if not on the '/' route */}
      {location.pathname !== '/' && (
        <div style={navRightStyle}>
          <div style={searchStyle}>
            <input type="text" placeholder="Search..." style={inputStyle} />
          </div>
          <div style={profileStyle} onClick={() => navigate('/profile')}>
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" style={profilePictureStyle} />
            ) : (
              <div style={profilePictureStyle}>{name.charAt(0)}</div>
            )}
            <span style={profileTextStyle}>Hello, {name}!!!</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
