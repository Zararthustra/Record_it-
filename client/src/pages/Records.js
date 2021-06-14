import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';

const Records = () => {

    let history = useHistory();
    const [usersList, setUsersList] = useState([]);

    const goHome = () => {
        history.push('/Home')
    }

    //Axios.get('http://localhost:3001/apiroutes/users').then((response) => {
    //        setUsersList(response.data);
    //    });
//{usersList.map((value, key) => {
//    return <div className="user">
//    <h2>id:</h2>
//    <p>{value.id}</p>
//    <h2>Name:</h2>
//    <p>{value.name}</p>
//    <h2>Password:</h2>
//    <p>{value.password}</p>
//</div>})}
    return (
        <div className="records">
            <h1>Records</h1>
            <button onClick={goHome}>Back to Home</button>
            
        </div>
    )
}

export default Records;