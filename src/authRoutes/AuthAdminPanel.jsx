import React from 'react'
import useAuth from '../hooks/useAuth';
import { AdminPanel } from '../pages/AdminPanel';
import { Navigate } from 'react-router-dom';

export const AuthAdminPanel = () => {

    const { isLoggedIn } = useAuth();

    return (isLoggedIn ? <AdminPanel/> : <Navigate to="/login"/>)
}
