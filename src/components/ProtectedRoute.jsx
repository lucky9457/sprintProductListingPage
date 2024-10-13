import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    // If token does not exist, redirect to the login page
    if (!token) {
        return <Navigate to="/signin" />;
    }

    // Otherwise, render the children components (protected page)
    return children;
};

export default ProtectedRoute;
