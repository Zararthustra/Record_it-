import React from 'react';
import Axios from 'axios';
import { useState } from "react";
import Navigation from '../components/Navigation';

const Admin = () => {

    //______________________________Variables__________________________________

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [userObject, setUserObject] = useState([]);
    const [newName, setNewName] = useState('')

    //______________________________Functions__________________________________

    const addUser = () => {
        Axios.post('/apiroutes/create/', {
            name: name,
            password: password
        }).then(() => {
            console.log("Insertion success");
        })
    }

    const getUsers = () => {
        Axios.get('/apiroutes/users/').then((response) => {
            setUsersList(response.data);
        });
    };

    const updateUser = (id) => {
        Axios.put('/apiroutes/users/update/', {
            name: newName,
            id: id
        });
    }

    const deleteUser = (id) => {
        Axios.delete(`/apiroutes/delete/${id}/`);
    }

    const getOne = () => {
        Axios.get(`/apiroutes/users/${user}/`).then((response) => {
            setUserObject(response.data)
        });
    };

    //_______________________________Return___________________________________

    return (
        <div className="App">
            <Navigation />
            <div className="add">
                <h1>Admin</h1>
                <a href="/Home">HOME</a>
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
                <button onClick={getUsers}>Show users</button>
                {usersList.map((value) => {
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

export default Admin;