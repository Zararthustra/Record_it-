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
        }).then((res) => {
            if (res.data[1]) {
                setSignUpStatus(
                    <div className="signup">
                        <div class="emoji  emoji--yay">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>
                        <h1>Account created successfully!</h1>
                        <button onClick={goLogin}>Login</button>
                    </div>)
            } else {
                setSignUpStatus(
                    <div className="signup">
                        <div class="emoji  emoji--wow">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__eyes"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>
                        <h1>This account already exists !</h1>
                        <button onClick={goLogin}>Login here</button>

                    </div>
                )
            }
        })
    }

    //replace a letter ("i" by "!") to change its color
    if (!signUpStatus) {
        $(document).ready(function () {
            const text = $("#phrase").html().replace(/I/, " <h1 class='letter'> !</h1>");
            $("#phrase").html(text)
        });
    }

    //_______________________________Return___________________________________
    if (!signUpStatus) {
        return (
            <>
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

            </>
        );
    } else {
        return (<div>{signUpStatus}</div>)
    }
}

export default Signup;