import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import $ from 'jquery';



const Signup = () => {

    //______________________________Variables__________________________________

    let history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [signUpStatus, setSignUpStatus] = useState('')

    //______________________________Functions__________________________________

    const goLogin = () => {
        history.push('/')
    }

    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            password: password
        }).then(() => {
            console.log("Insertion success")
            setSignUpStatus(
                <div>
                    <h1>Account created !</h1>
                </div>)
        })
    }

    //replace a letter ("i" by "!") to change its color
    $(document).ready(function () {
        const text = $("#phrase").html().replace(/I/, " <h1 class='letter'> !</h1>");
        $("#phrase").html(text)
    });

    //_______________________________Return___________________________________

    return (
        <div className="signup">
            <h1 id="phrase">SIGNUP</h1>
            <h1>{signUpStatus}</h1>
            <div id="name">
                <label>Name </label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value)
                }}
                />
            </div>
            <div id="password">
                <label>Password </label>
                <input type="text" onChange={(event) => {
                    setPassword(event.target.value)
                }}
                />
            </div>
            <div className="buttons">
                <button onClick={addUser}>Create account</button>
                <button onClick={goLogin}>Login page</button>
            </div>
        </div>
    );
}

export default Signup;