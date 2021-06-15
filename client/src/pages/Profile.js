import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';

const Profile = () => {

    const [recordObject, setRecordObject] = useState([]);
    const userName = localStorage.getItem("username")
    let history = useHistory();


    const goHome = () => {
        history.push('/Home')
    }

    const getRecords = () => {
        Axios.post('http://localhost:3001/apiroutes/getRecords', {
            user_id: localStorage.getItem("userid"),
            game_id: localStorage.getItem("gameid")
        }).then((response) => {
            setRecordObject(response.data);
        })
    }
    //<h3>{recordObject.game_name ? 0 : 2} : {recordObject.record ? 0 : 2} points on {recordObject.createdAt ? 0 : 2}</h3>
    
    return (
        <div className="profile">
            <h1>{userName} Profile</h1>

            <div>
                <header>
                <h2>Games records:</h2>
                </header>
                {recordObject.map((value) => {
                    return <div className="record">
                    <h2>game:</h2>
                    <p>{value.game_name}</p>
                    <h2>Record:</h2>
                    <p>{value.record}</p>
                    <h2>Date:</h2>
                    <p>{value.createdAt}</p>
                    </div>
                })}
            </div>
            <button onClick={getRecords}>Load Records</button>
            <button onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default Profile;