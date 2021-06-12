import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Profile = () => {

    //get user info in local storage
    const userFlappyRecord = localStorage.getItem("bestFlappyScore")
    const userName = localStorage.getItem("username")

    //redirection
    let history = useHistory();
    const goHome = () => {
        history.push('/Home')
    }

    return (
        <div className="profile">
            <h1>{userName} Profile</h1>

            <div>
                <h2>Games records:</h2>
                <h3>Flappy Holbie: {userFlappyRecord}</h3>
            </div>
            <button onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default Profile;