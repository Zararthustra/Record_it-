import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import  { AiFillStar } from 'react-icons/ai';


const Profile = () => {

    //get user info in local storage
    const userFlappyRecord = localStorage.getItem("bestFlappyScore");
    const userName = localStorage.getItem("username");

    let history = useHistory();
    
    const userName = localStorage.getItem("username")
    const [recordObject, setRecordObject] = useState([]);
    
    let noRecord = recordObject.length === 0 ? "No record yet, click below to load" : "";

    //______________________________Functions__________________________________

    const goHome = () => {
        history.push('/Home')
    }

    const getRecords = () => {
        Axios.post('http://localhost:3001/apiroutes/getRecords', {
            user_id: localStorage.getItem("userid"),
        }).then((response) => {
            setRecordObject(response.data);
        })
    }

    //______________________________Return__________________________________

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
            {/* <h1>{userName} Profile</h1>

            <div>
                <header>
                    <h2>Games records:</h2>
                </header>
                {noRecord}
                {recordObject.map((value) => {
                    const cleanDate = new Date(value.createdAt)
                    return <div className="record">
                        <h2>Game:</h2>
                        <p>{value.game_name}</p>
                        <h2>Record:</h2>
                        <p>{value.record}</p>
                        <h2>Date:</h2>
                        <p>{cleanDate.toDateString()}</p>
                    </div>
                })}
            </div>
            <button onClick={getRecords}>Load Records</button>
            <button onClick={goHome}>Back to Home</button> */}
        </div>
    )
}

export default Profile;