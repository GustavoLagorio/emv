import React from 'react'
import useAuth from '../hooks/useAuth';
import { EditCollection } from '../pages/EditCollection';
import { Navigate } from 'react-router-dom';

export const AuthEditCollection = () => {
  const { isLoggedIn } = useAuth();
  const user = localStorage.getItem("userMeta");

  if (
    isLoggedIn &&
    (user === import.meta.env.VITE_MAIL_CLIENT ||
      user == import.meta.env.VITE_MAIL_FRONT ||
      user == import.meta.env.VITE_MAIL_BACK ||
      user == import.meta.env.VITE_MAIL_DESIGN)
  ) {
    return <EditCollection />
  } else {
    return <Navigate to="/login"/>
  } 
}
