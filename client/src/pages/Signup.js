import React from 'react';
import Axios from 'axios';
import { useState } from "react";
import Navigation from '../components/Navigation';



const Signup = () => {
    
    //______________________________Variables__________________________________

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [signUpStatus, setSignUpStatus] = useState('')

    //______________________________Functions__________________________________

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

    //_______________________________Return___________________________________

    return (
        <div className="singUp">
            <Navigation />
            <div className="signUpContent">
                <h1>SIGNUP</h1>
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
                <button onClick={addUser}>Create account</button>
            </div>
            {/* <div className="users">
                <button onClick={getUsers}>Show users</button>
                {usersList.map((value, key) => {
                    return <div className="user">
                        <h2>id:</h2>
                        <p>{value.id}</p>
                        <h2>Name:</h2>
                        <p>{value.name}</p>
                        <h2>Password:</h2>
                        <p>{value.password}</p>
                        <div>
                            <input
                                type="text"
                                placeholder="update name..."
                                onChange={(event) => {
                                    setNewName(event.target.value)
                                }} />
                            <button onClick={() => {
                                updateUser(value.id)
                            }}>
                                Update</button>
                            <button onClick={() => { deleteUser(value.id) }}>Delete</button>
                        </div>
                    </div>
                })}
            </div> */}
            {/* <div className="users">
                <label>Find User by id</label>
                <input type="text" onChange={(event) => {
                    setUser(event.target.value)
                }}
                />
                <button onClick={getOne}>Get user by id</button>
                {userObject.map((value) => {
                    return <div className="user">
                        <p>id :{value.id}</p>
                        <p>Name: {value.name}</p>
                        <p>Password: {value.password}</p>
                    </div>
                })}
            </div> */}
                {/* <div>{signUpStatus}</div>
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
            </div> */}
        </div>
    );
}

export default Signup;