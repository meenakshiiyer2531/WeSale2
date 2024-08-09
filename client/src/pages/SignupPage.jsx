import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

    // Check if email is from 'kristujayanti.com'
    const emailDomain = email.split('@')[1];
    if (emailDomain !== 'kristujayanti.com') {
      alert('Only users with an @kristujayanti.com email can sign up.');
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        navigate('/dashboard');
      } catch (err) {
        alert('Error creating account');
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B0C5D4', // Background color of the whole page
    }}>
      <div style={{
        display: 'flex',
        width: '70%',
        height: '70vh',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          flex: 1,
          backgroundColor: '#E5EEF4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src="logo.png" alt="Logo" style={{
            width: '60%',
            objectFit: 'contain',
          }} />
        </div>
        <div style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#5C6F7F',
          }}>SIGN UP</h2>
          <form style={{
            width: '100%',
          }} onSubmit={handleSubmission}>
            <input
              type="text"
              placeholder="Name"
              style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#5C6F7F',
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#5C6F7F',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#5C6F7F',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              style={{
                marginBottom: '20px',
                padding: '10px',
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#5C6F7F',
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" style={{
              backgroundColor: '#A6B9C9',
              color: '#FFFFFF',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '10px',
            }}>
              Sign Up
            </button>
            <Link to="/login" style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '10px',
              color: '#9EABB3',
              textDecoration: 'none',
              fontSize: '12px',
            }}>
              Already have an account? Log In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
