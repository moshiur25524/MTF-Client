import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import LoadingButton from '../Shared/LoadingButton';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()

    if(loading || adminLoading){
        return <LoadingButton/>
    }

    if (!user || !admin) {
        signOut(auth)
        // localStorage.removeItem('accessToken')
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children
};

export default RequireAdmin;