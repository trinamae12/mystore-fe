import React, { useEffect, useState } from 'react';

function UserProfile({ user }) {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        console.log("user", user);
        setUserInfo(user);
    },[]);

    return(
        <>
            <h1>User Profile</h1>
            <ul>
                <li>Name: {userInfo['name']}</li>
                <li>Email: {userInfo['email']}</li>
            </ul>
        </>
    );
}

export default UserProfile;