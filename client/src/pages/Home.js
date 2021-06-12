import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Home = () => {

  let history = useHistory();

  const goProfile = () => {
    history.push('/Profile')
  }
  const goRecords = () => {
    history.push('/Records')
  }
  const goGames = () => {
    history.push('/Games')
  }

  //Get user info

  //  get user info stored in localStorage when login
  //const userid = localStorage.getItem("userid")
  const username = localStorage.getItem("username")


  return (
    <div className="Home">
      <h1>Welcome {username}</h1>
      <div className="routes">
        <button onClick={goProfile}>Go to Profile</button>
        <button onClick={goRecords}>Go to Records</button>
        <button onClick={goGames}>Go to Games</button>
      </div>
    </div>
  );
};

export default Home;

//  get user object in db with its id:

//import Axios from 'axios';
//import { useState } from "react";

//  const [userObject, setUserObject] = useState([]);
//  Axios.get(`http://localhost:3001/users/${userid}`).then((response) => {
//    setUserObject(response.data)
//    console.log(userObject[0]);
//  });

//{userObject.map((value) => {
//  return <div className="user">
//    <p>id :{value.id}</p>
//    <p>Name: {value.name}</p>
//    <p>Password: {value.password}</p>
//  </div>
//})}