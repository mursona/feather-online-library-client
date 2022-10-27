import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UserProfile = () => {

    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className='card card-bg col-6'>
            <Image className='mx-auto my-4 rounded-circle profile-img' src={user?.photoURL}></Image>
            <div className='btn-text fw-bold'>
            {user?.displayName}
            </div>
            <div className='btn-text my-3'>
            Email Address: {user?.email}
            </div>
            </div>
        </div>
    );
};

export default UserProfile;