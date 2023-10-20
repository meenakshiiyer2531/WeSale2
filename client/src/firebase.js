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
export const auth = getAuth(app);
