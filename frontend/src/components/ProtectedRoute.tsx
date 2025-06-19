import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem('accessToken');
  return token ? children : <Navigate to="/login" replace />;
}
