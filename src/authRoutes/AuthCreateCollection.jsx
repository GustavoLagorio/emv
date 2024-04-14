import React from 'react'
import useAuth from '../hooks/useAuth';
import { CreateCollection } from '../pages/CreateCollection';
import { Navigate } from 'react-router-dom';

export const AuthCreateCollection = () => {
  const { isLoggedIn } = useAuth();

    return (isLoggedIn ? <CreateCollection/> : <Navigate to="/login"/>)
}
