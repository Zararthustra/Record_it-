import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';

const Profile = () => {

    const [recordObject, setRecordObject] = useState([]);
    const userName = localStorage.getItem("username")
    let history = useHistory();
    let noRecord = ""
    
    if (recordObject.length === 0) noRecord = "No record yet !";

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

    return (
        <div className="profile">
            <h1>{userName} Profile</h1>

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
            <button onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default Profile;