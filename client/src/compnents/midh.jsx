import React from 'react';

function MidText() {
  const containerStyle = {
    textAlign: 'center',
    padding: '190px',
  };

  const textStyle = {
    color: '#003344', // Set the text color to green
    fontSize: '24px',
  };

  const buttonStyle = {
    backgroundColor: 'white', // Set the button background color to green
    color: '#003344', // Set the button text color to white
    marginTop: '90px',
    padding: '10px 20px',
    border: '3px solid #003344',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>A college ONLY marketplace where students would not have to worry about  dangerous individuals or scammers while buying and selling items online and in their campus community.</p>
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default MidText;