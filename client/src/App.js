import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderText';
import Footer from './components/FooterText';
import MidText from './components/MidText';
import MyLogin from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SellProductPage from './pages/SellProductPage'; // Import the new page

function App() {
  const [profileData, setProfileData] = useState({
    name: 'V Meenakshi Iyer',
    aboutMe: 'Hello, I am a Full Stack developer from India. I hope to connect with all the peers',
    registerNo: '123456',
    mobileNo: '5563782738282',
    email: 'meenakshi@gmail.com',
    location: 'India',
    course: 'Computer Science',
    profilePicture: '', // Initially no profile picture
  });

  const [productData, setProductData] = useState(null); // State for product data

  const updateProfileData = (updatedProfile) => {
    setProfileData(updatedProfile);
  };

  const updateProductData = (updatedProduct) => {
    setProductData(updatedProduct);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Header /><MidText /><Footer /></>} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<><Header /><DashboardPage /><Footer /></>} />
          <Route 
            path="/profile" 
            element={<><Header /><ProfilePage profileData={profileData} productData={productData} /><Footer /></>} 
          />
          <Route 
            path="/edit-profile" 
            element={<><Header /><EditProfilePage profileData={profileData} updateProfileData={updateProfileData} /><Footer /></>} 
          />
          <Route 
            path="/sell-product" 
            element={<><Header /><SellProductPage updateProductData={updateProductData} /></>} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
