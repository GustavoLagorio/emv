import React from 'react'
import useAuth from '../hooks/useAuth';
import { EditCollaboration } from '../pages/EditCollaboration';
import { Navigate } from 'react-router-dom';

export const AuthEditCollaboration = () => {
  const { isLoggedIn } = useAuth();
  const user = localStorage.getItem("userMeta");

  if (
    isLoggedIn &&
    (user === import.meta.env.VITE_MAIL_CLIENT ||
      user == import.meta.env.VITE_MAIL_FRONT ||
      user == import.meta.env.VITE_MAIL_BACK ||
      user == import.meta.env.VITE_MAIL_DESIGN)
  ) {
    return <EditCollaboration />
  } else {
    return <Navigate to="/login"/>
  }  
}
