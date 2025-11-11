import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
// import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    console.log(location)

    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthProvider.jsx"; // useAuth import

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth(); // useAuth hook ব্যবহার
//   return user ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;