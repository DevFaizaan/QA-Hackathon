import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        <>
            {isAuthenticated && (
                <article className='user-profile'>
                    <h1>Profile</h1>
                    <div className='profile-info-container'>
                        <div className='profile-info-content'>
                            {user.given_name && <h3>First name: {user.given_name} </h3>}
                            {user.family_name && <h3>Surname : {user.family_name} </h3>}
                            {user.email && <h3>Email : {user.email}</h3>}
                        </div>
                    </div>
                </article>
            )}
        </>
    );
}

export default Profile;
