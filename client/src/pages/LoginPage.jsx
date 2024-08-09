import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

    // Check if email is from 'kristujayanti.com'
    const emailDomain = email.split('@')[1];
    if (emailDomain !== 'kristujayanti.com') {
      alert('Only users with an @kristujayanti.com email can log in.');
      return;
    }

    if (!email || !password) {
      alert('Please enter email and password');
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        navigate('/dashboard');
      } catch (err) {
        alert('Error logging in');
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
          }}>LOG IN</h2>
          <form style={{
            width: '100%',
          }} onSubmit={handleSubmission}>
            <input
              type="text"
              placeholder="Email or phone number"
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
                marginBottom: '20px',
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
              Log In
            </button>
            <Link to="/forgot-password" style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '10px',
              color: '#9EABB3',
              textDecoration: 'none',
              fontSize: '12px',
            }}>
              Forgot account?
            </Link>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}>
              <div style={{
                height: '1px',
                backgroundColor: '#E0E0E0',
                flex: 1,
              }}></div>
              <span style={{
                margin: '0 10px',
                color: '#9EABB3',
                fontSize: '12px',
              }}>or</span>
              <div style={{
                height: '1px',
                backgroundColor: '#E0E0E0',
                flex: 1,
              }}></div>
            </div>
            <Link to="/signup" style={{
              backgroundColor: '#91a5b7',
              color: 'white',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid #D6E2EA',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
            }}>
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
