import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import  { AiFillStar } from 'react-icons/ai';


const Profile = () => {

    //get user info in local storage
    const userFlappyRecord = localStorage.getItem("bestFlappyScore");
    const userName = localStorage.getItem("username");

    //redirection
    let history = useHistory();
    const goHome = () => {
        history.push('/Home')
    }

    return (
        <div className="profile">
            <Navigation/>
            <div className="profileContent">
                <div className="details">
                    <h6>{userName} Profile</h6>
                    <h7>Password</h7>
                    <h7>Games records:</h7>
                    <h7>Flappy Holbie: {userFlappyRecord}</h7>
                </div>
                <div className="performances">
                    <h4 id="Global">
                        Global Score :
                    </h4>
                    <h4 id="score">10 995 <AiFillStar className="star"/>
                        <AiFillStar className="star"/>  
                        <AiFillStar className="star"/></h4>
                    <h4 id="Games_played">Games played :</h4>
                    <h5 id="g1">Flappy</h5>
                    <p id="d1">**************</p>
                    <h5 id="g2">Bird</h5>
                    <p id="d2">**************</p>
                    <h5 id="g3">Flappy</h5>
                    <p id="d3">**************</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;