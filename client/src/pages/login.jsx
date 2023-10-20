import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Correct import
import { auth } from '../firebase';

function MyLoginPage() {
  const [text, setEmail] = useState('');
    const [password, setPassword] = useState('');
       

  const handleSubmission = async(e) => {
    if (!text || !password) {
      alert('Enter email id and password');
    } else {
      e.preventDefault();
      await signInWithEmailAndPassword(auth,text,password) // Use 'signInWithEmailAndPassword' from 'auth'
        .then((userCredential) => {
          // User is signed in.
          const user = userCredential.user;
          console.log(user);
          alert('Authenticated');
        })
        .catch((err) => {
          alert(' Wrong ');
        });
    }
  };

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align form elements
    justifyContent: 'center',
  };

  const logoStyle = {
    width: '300px',
  };

  // CSS for the login form

  const formStyle = {
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    
  };

  const inputStyle = {
    margin: '30px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    
  };

  const buttonStyle = {
    backgroundColor: 'rgba(7, 70, 91, 0.3333)',
    color: 'black',
    fontSize: '24px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '10px black',
    cursor: 'pointer',
    marginTop: '30px',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={leftSideStyle}>
          <img src="logo.png" alt="Logo2" style={logoStyle} />
        </div>
        <div style={rightSideStyle}>
       
          <h1 style={{ fontSize: '40px', fontFamily: '"Lucida Console", Courier, monospace' }}>SIGN IN</h1>
         
          <form style={formStyle}>
            <input type="text" placeholder="Email" style={inputStyle} 
            onChange={(event)=>setEmail((prev)=> ({...prev, text: event.target.text}))
            }
            />
            <input type="password" placeholder="Password" style={inputStyle} 
            onChange={(event)=>setPassword((prev)=> ({...prev, password: event.target.password}))
            }
            />
            <button type="submit" style={buttonStyle}
            onClick={handleSubmission}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyLoginPage;
