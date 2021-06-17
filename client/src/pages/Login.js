import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import Navigation from '../components/Navigation';



const Login = () => {

    //______________________________Variables__________________________________

    let history = useHistory();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    //______________________________Functions__________________________________

    const redirect = () => {
        history.push('/Home')
    }

    // Check user info,
    // setLocalStorage if success, otherwise throw error
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

    //_______________________________Return___________________________________

    return (
        <div className="login">
            <Navigation />
            <div className="loginContent">
                <h1>LOGIN</h1>
                <h1>{loginStatus}</h1>
                <div id="name">
                    <label>Name </label>
                    <input type="text" onChange={(event) => {
                        setName(event.target.value)
                    }}
                    />
                </div>
                <div id="password">
                    <label>Password </label>
                    <input type="password" onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    />
                </div>
                <button onClick={login}>Log in</button>
            </div>
        </div>
    );
}

export default Login;