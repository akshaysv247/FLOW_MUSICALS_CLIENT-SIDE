import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignOpsPage from './pages/SignOpsPage';
import SignupPage from './pages/SignupPage';
import ArtistSignupPage from './pages/ArtistSignupPage';
import ArtistLoginPage from './pages/ArtistLoginPage';
import ArtistHomePage from './pages/ArtistHomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminUserDetPage from './pages/AdminUserDetPage';
import AdminArtistDetPage from './pages/AdminArtistDetPage';
import AdminSongs from './pages/AdminSongs';
import AdminAddTrack from './pages/AdminAddTrack';

// import PublicRoute from './utils/PublicRoute';
// import ProtectedRoute from './utils/ProtectedRoute';
// import ArtistPublicRoute from './utils/ArtistPublicRoute';
// import ArtistPrivateRoute from './utils/ArtistPrivateRoute';
// import AdminPublicRoute from './utils/AdminPublicRoute';
// import AdminPrivateRoute from './utils/AdminPrivateRoute';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={(
            // <PublicRoute>
            <LoginPage />
            // </PublicRoute>
        )}
        />
        <Route
          path="/signOps"
          element={(
            // <PublicRoute>
            <SignOpsPage />
            // </PublicRoute>
        )}
        />
        <Route
          path="/signup"
          element={(
            // <PublicRoute>
            <SignupPage />
            // </PublicRoute>
        )}
        />
        <Route
          path="/home"
          element={(
            // <ProtectedRoute>
            <HomePage />
            // </ProtectedRoute>
        )}
        />

        <Route
          path="/artist/login"
          element={(
            // <ArtistPublicRoute>
            <ArtistLoginPage />
            // </ArtistPublicRoute>
         )}
        />
        <Route
          path="/artist/signup"
          element={(
            // <ArtistPublicRoute>
            <ArtistSignupPage />
            // </ArtistPublicRoute>
        )}
        />
        <Route
          path="/artist/home"
          element={(
            // <ArtistPrivateRoute>
            <ArtistHomePage />
            // </ArtistPrivateRoute>
        )}
        />

        <Route
          path="/admin"
          element={(
            // <AdminPublicRoute>
            <AdminLoginPage />
            // </AdminPublicRoute>
        )}
        />
        <Route
          path="/admin/home"
          element={(
            // <AdminPrivateRoute>
            <AdminHomePage />
            // </AdminPrivateRoute>
        )}
        />
        <Route
          path="/admin/users"
          element={(
            // <AdminPrivateRoute>
            <AdminUserDetPage />
            // </AdminPrivateRoute>
        )}
        />
        <Route
          path="/admin/artists"
          element={(
            // <AdminPrivateRoute>
            <AdminArtistDetPage />
            // </AdminPrivateRoute>
        )}
        />
        <Route
          path="/admin/tracks"
          element={(
            // <AdminPrivateRoute>
            <AdminSongs />
            // </AdminPrivateRoute>
          )}
        />
        <Route
          path="/admin/addTrack"
          element={(
            // <AdminPrivateRoute>
            <AdminAddTrack />
            // </AdminPrivateRoute>
          )}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
