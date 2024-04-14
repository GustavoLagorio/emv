import React from 'react'
import useAuth from '../hooks/useAuth';
import { EditCollection } from '../pages/EditCollection';
import { Navigate } from 'react-router-dom';

export const AuthEditCollection = () => {
  const { isLoggedIn } = useAuth();

    return (isLoggedIn ? <EditCollection/> : <Navigate to="/login"/>)
}
