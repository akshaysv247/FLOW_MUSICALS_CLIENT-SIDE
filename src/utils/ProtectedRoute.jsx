import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute() {
  if (localStorage.getItem('token')) {
    // eslint-disable-next-line react/prop-types, no-undef
    return props.children;
  }
  if (!localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
