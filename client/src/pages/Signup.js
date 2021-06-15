import React from 'react';
import Axios from 'axios';
import { useState } from "react";
import Navigation from '../components/Navigation';
import '../App.css';

const Signup = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [signUpStatus, setSignUpStatus] = useState('')


    /* ------------------------------------------------------------------------------------------- */

    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            password: password
        }).then(() => {
            console.log("Insertion success")
            setSignUpStatus(
                <div>
                    <h1>Account created !</h1>
                    <a href="http://localhost:3000/">Login here</a>
                </div>)
        })
    }

    /* ------------------------------------------------------------------------------------------- */

    return (
        <div className="App">
            <Navigation />
            <div className="add">
                <h1>SIGNUP</h1>
                <div>{signUpStatus}</div>
                <label>Name </label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value)
                }}
                />
                <label>Password </label>
                <input type="text" onChange={(event) => {
                    setPassword(event.target.value)
                }}
                />
                <button onClick={addUser}>Create account</button>
            </div>
        </div>
    );
}

export default Signup;