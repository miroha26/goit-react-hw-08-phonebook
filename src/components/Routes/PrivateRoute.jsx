import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelectors } from 'components/hooks/UseSelector';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelectors();
  if (!isLoggedIn  ) {
    return <Navigate to="/login" replace/>;
  }
  return children;
};
