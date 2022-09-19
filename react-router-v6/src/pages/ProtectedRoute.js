import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { children, user } = props;

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
