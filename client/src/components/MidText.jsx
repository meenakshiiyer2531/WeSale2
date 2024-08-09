import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MidText() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    textAlign: 'center',
    padding: '190px',
  };

  const textStyle = {
    color: 'black',
    fontSize: '24px',
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#91a5b7' : 'white',
    color: isHovered ? 'white' : 'black',
    marginTop: '90px',
    padding: '10px 20px',
    border: '3px solid #003344',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        A college ONLY marketplace where students would not have to worry about
        dangerous individuals or scammers while buying and selling items online and in their campus community.
      </p>
      <button
        style={buttonStyle}
        onClick={handleLoginClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Login
      </button>
    </div>
  );
}

export default MidText;
