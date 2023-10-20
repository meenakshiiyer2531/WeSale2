import React from 'react';

function MidText() {
  const containerStyle = {
    textAlign: 'center',
  };

  const textStyle = {
    color: 'green', // Set the text color to green
    fontSize: '24px',
  };

  const buttonStyle = {
    backgroundColor: 'green', // Set the button background color to green
    color: 'white', // Set the button text color to white
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>Welcome to our digital hub dedicated to sustainable living! Our website is your one-stop resource for eco-conscious living, where we share expert advice, actionable tips, and inspiring stories 
      to help you make a positive impact on the planet. Explore a world of eco-friendly ideas, from reducing your carbon footprint to embracing zero-waste living. Whether you're a seasoned eco-warrior or 
      just starting your journey towards sustainability, we're here to guide you every step of the way. Join our community of like-minded individuals and discover how small changes in your lifestyle can lead to a brighter, greener future for all</p>
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default MidText;
