import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <div className='flex justify-center'>
            <button className='btn loading my-2nd-btn my-5 text-xl'>
                loading
            </button>
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
