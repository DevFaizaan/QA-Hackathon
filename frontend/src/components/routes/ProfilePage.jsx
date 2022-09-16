import Header from '../home/header/Header';
import Profile from '../authentication/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function ProfilePage() {
    const { isLoading, isAuthenticated, error } = useAuth0();
    const navigate = useNavigate();


    return (
        <>
            <Header />
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && !isAuthenticated && navigate("/*")}
            <Profile />
        </>
    );
}

export default ProfilePage;
