import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfilePage({ profileData, updateProfileData }) {
  const [name, setName] = useState(profileData.name);
  const [aboutMe, setAboutMe] = useState(profileData.aboutMe);
  const [registerNo, setRegisterNo] = useState(profileData.registerNo);
  const [mobileNo, setMobileNo] = useState(profileData.mobileNo);
  const [email, setEmail] = useState(profileData.email);
  const [location, setLocation] = useState(profileData.location);
  const [course, setCourse] = useState(profileData.course);
  const [profilePicture, setProfilePicture] = useState(profileData.profilePicture);
  const navigate = useNavigate();

  const handleSave = () => {
    const updatedProfile = {
      name,
      aboutMe,
      registerNo,
      mobileNo,
      email,
      location,
      course,
      profilePicture,
    };
    updateProfileData(updatedProfile);
    navigate('/profile');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F1F1F1',
    borderRadius: '10px',
    width: '50%',
    margin: '50px auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2>Edit Profile</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePicture(URL.createObjectURL(e.target.files[0]))}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="About Me"
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Register No."
        value={registerNo}
        onChange={(e) => setRegisterNo(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Mobile No."
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProfilePage;
