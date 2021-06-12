import React from 'react';
import Axios from 'axios';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../App.css';

const Signup = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [userObject, setUserObject] = useState([]);
    const [newName, setNewName] = useState('')


    let history = useHistory();
    const redirect = () => {
        history.push('/')
    }

    /* ------------------------------------------------------------------------------------------- */

    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            password: password
        }).then(() => {
            console.log("Insertion success");
            return true
        })
    }

    const getUsers = () => {
        Axios.get('http://localhost:3001/apiroutes/users').then((response) => {
            setUsersList(response.data);
        });
    };

    const updateUser = (id) => {
        Axios.put('http://localhost:3001/users/update', {
            name: newName,
            id: id
        });
    }

    const deleteUser = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
    }

    const getOne = () => {
        Axios.get(`http://localhost:3001/users/${user}`).then((response) => {
            setUserObject(response.data)
        });
    };
    
    /* ------------------------------------------------------------------------------------------- */

    return (
        <div className="App">
            <Navigation />
            <div className="add">
                <h1>SIGNUP</h1>
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
            <div className="users">
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
                <button onClick={getUsers}>Show users</button>
            </div>
            <div className="users">
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
            </div>
        </div>
    );
}

export default Signup;