import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCH3YUWk3rINZzy9nBtXLqyyDYvzu1LNEk",
  authDomain: "wesale-7fde0.firebaseapp.com",
  databaseURL: "https://wesale-7fde0-default-rtdb.firebaseio.com",
  projectId: "wesale-7fde0",
  storageBucket: "wesale-7fde0.appspot.com",
  messagingSenderId: "174138616566",
  appId: "1:174138616566:web:168b8229c77b6267851ad7",
  measurementId: "G-393X7B5FQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
