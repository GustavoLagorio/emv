import React from 'react'
import useAuth from '../hooks/useAuth';
import { CreateCollection } from '../pages/CreateCollection';
import { Navigate } from 'react-router-dom';

export const AuthCreateCollection = () => {
  const { isLoggedIn } = useAuth();
  const user = localStorage.getItem("userMeta");

  if (
    isLoggedIn &&
    (user === import.meta.env.VITE_MAIL_CLIENT ||
      user == import.meta.env.VITE_MAIL_FRONT ||
      user == import.meta.env.VITE_MAIL_BACK ||
      user == import.meta.env.VITE_MAIL_DESIGN)
  ) {
    return <CreateCollection />
  } else {
    return <Navigate to="/login"/>
  }  
}
