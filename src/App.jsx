import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignOpsPage from './pages/SignOpsPage';
import SignupPage from './pages/SignupPage';
import ArtistSignupPage from './pages/ArtistSignupPage';
import ArtistLoginPage from './pages/ArtistLoginPage';
import ArtistHomePage from './pages/ArtistHomePage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signOps" element={<SignOpsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/artistLogin" element={<ArtistLoginPage />} />
        <Route path="/artistSignup" element={<ArtistSignupPage />} />
        <Route path="/artistHome" element={<ArtistHomePage />} />

        <Route path="/adminLogin" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
