import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonContent, Icon } from 'semantic-ui-react';

function ProfilePage({ profileData }) {
  const navigate = useNavigate();

  const profilePictureStyle = {
    width: '350px',
    height: '300px',
    borderRadius: '100%',
    backgroundColor: '#e0e0e0', // Light grey background
    color: '#333', // Dark text color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    marginRight: '30px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px', // Slimmer padding
    backgroundColor: '#ffffff', // White background for a clean look
    borderRadius: '20px',
    width: '150%', // Increased width
    maxWidth: '1600px', // Max width
    margin: '80px auto 0', // Centered and moved down
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative', // Position relative for button placement
    transition: 'background-color 0.5s ease, transform 0.5s ease', // Smooth transition for hover effect
    overflow: 'hidden', // Ensure gradient effect stays within container
  };

  const profileContainerHoverStyle = {
    background: 'linear-gradient(135deg, #91a5b7, #ffffff)',
    backgroundSize: '200%',
    backgroundPosition: 'right bottom',
    transform: 'scale(1.02)', // Slightly enlarge on hover
  };

  const detailsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '30px', // Space between profile container and button
  };

  const detailStyle = {
    margin: '12px 0',
    fontSize: '18px',
    color: '#333', // Dark text color for better readability
  };

  const nameStyle = {
    margin: '0 0 15px 0',
    color: '#333',
    fontSize: '32px',
    fontWeight: 'bold',
  };

  const animatedButtonStyle = {
    padding: '12px 24px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    background: '#91a5b7', // Base color
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };


  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#7792a3'; // Slightly lighter shade on hover
    e.currentTarget.style.transform = 'translateY(-5px)'; // Move button up slightly
    e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#91a5b7'; // Revert to original color
    e.currentTarget.style.transform = 'translateY(0)'; // Revert button position
    e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
  };

  const { name, aboutMe, registerNo, mobileNo, email, location, course, profilePicture } = profileData;

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={profileContainerStyle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, profileContainerHoverStyle);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff'; // Revert to original background
          e.currentTarget.style.backgroundSize = '100%';
          e.currentTarget.style.backgroundPosition = 'center';
          e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
        }}
      >
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" style={profilePictureStyle} />
        ) : (
          <div style={profilePictureStyle}>{name.charAt(0)}</div>
        )}
        <div style={detailsContainerStyle}>
          <h2 style={nameStyle}>{name}</h2>
          <p style={detailStyle}><strong></strong> {aboutMe}</p>
          <p style={detailStyle}><strong>Register No.:</strong> {registerNo}</p>
          <p style={detailStyle}><strong>Mobile No.:</strong> {mobileNo}</p>
          <p style={detailStyle}><strong>Email:</strong> {email}</p>
          <p style={detailStyle}><strong>Location:</strong> {location}</p>
          <p style={detailStyle}><strong>Course:</strong> {course}</p>
        </div>
      </div>
      <div style={buttonContainerStyle}>
      <Button
          animated
          primary
          onClick={() => navigate('/sell-product')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={animatedButtonStyle}
        >
          <ButtonContent visible>Sell a Product</ButtonContent>
          <ButtonContent hidden>
            <Icon name='shop' />
          </ButtonContent>
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
