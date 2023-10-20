import React from 'react';

function MyLoginPage() {
  const pageStyle = {
    backgroundColor: 'rgba(7, 70, 91, 0.3333)',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    width: '80%',
    height: '80vh',
    backgroundColor: '#F1F6F8',
  };

  const leftSideStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '20px',
  };

  const logoStyle = {
    width: '300px',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={leftSideStyle}>
          <img
            src="logo.png"
            alt="Logo2"
            style={logoStyle}
          />
        </div>
        <div style={rightSideStyle}>
          <h2>Right Side</h2>
        </div>
      </div>
    </div>
  );
}

export default MyLoginPage;
