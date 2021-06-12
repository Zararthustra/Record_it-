import React from 'react';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import Navigation from '../components/Navigation';
import '../App.css';

const Login = () => {
    let history = useHistory();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    const redirect = () => {
        history.push('/Home')
    }

    /* ------------------------------------------------------------------------------------------- */

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            name: name,
            password: password
        }).then((response) => {
            if (response.data[0]) {
                //have to load all records
                localStorage.setItem("userid", response.data[0].id)
                localStorage.setItem("username", response.data[0].name)
                localStorage.setItem("password", response.data[0].password)
                localStorage.setItem("createdat", response.data[0].createdAt)
                setLoginStatus(
                    <div>
                        <h1>Welcome back {name} !</h1>
                        <button onClick={redirect}>Go to homepage</button>
                    </div>)
            } else {
                setLoginStatus(
                    <div>
                        <h1>No user named "{name}" or wrong password !</h1>
                    </div>)
            }
        })
    }

    /* ------------------------------------------------------------------------------------------- */

    return (
        <div className="App">
            <Navigation />
            <div className="add">
                <h1>LOGIN</h1>
                <h1>{loginStatus}</h1>
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
                <button onClick={login}>Log in</button>
            </div>
        </div>
    );
}

export default Login;