import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import $ from 'jquery';


const Login = () => {

    //______________________________Variables__________________________________

    let history = useHistory();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    //______________________________Functions__________________________________
    const dev = false
    const localHost = dev ? 'http://localhost:3001/' : '/'

    const goSignup = () => {
        history.push('/Signup')
    }
    const goLogin = () => {
        setLoginStatus()
    }
    const redirect = () => {
        history.push('/Home')
    }


    // Check user info,
    // setLocalStorage if success, otherwise throw error
    const login = () => {
        Axios.post(`${localHost}apiroutes/login`, {
            name: name,
            password: password
        }).then((response) => {
            if (response.data[0]) {
                //have to load all records
                localStorage.setItem("userid", response.data[0].id)
                localStorage.setItem("username", response.data[0].name)
                localStorage.setItem("password", response.data[0].password)
                setLoginStatus(
                    <div className="login">
                        <div class="emoji  emoji--yay">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>
                        <h2>Welcome back {name} !</h2>
                        <button onClick={redirect} className="raise">Come in !</button>
                    </div>)
            } else {
                setLoginStatus(
                    <div className="login">
                        <div class="emoji  emoji--wow">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__eyes"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>
                        <h2>No user named '{name}' or wrong password !</h2>
                        <div className="buttons">
                            <button onClick={goLogin} className="raise">Try again</button>
                            <button onClick={goSignup} className="iamnew">Signup</button>
                        </div>
                    </div>)
            }
        })
    }

    //replace a letter ("i" by "!") to change its color
    if (!loginStatus) {
        $(document).ready(function () {
            const text = $("#phrase").html().replace(/I/, " <h1 class='letter'> !</h1>");
            $("#phrase").html(text)
        });
    }

    //_______________________________Return___________________________________

    if (!loginStatus) {
        return (
            <div className="login">
                <h1 id="phrase">LOGIN</h1>
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
                <div className="buttons">
                    <button onClick={login} className="raise">Submit</button>
                    <button onClick={goSignup} className="iamnew">I am new</button>
                </div>
            </div>
        );
    } else {
        return (<div>{loginStatus}</div>)
    }
}

export default Login;