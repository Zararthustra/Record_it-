import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';


const Home = () => {

    //______________________________Variables__________________________________

  const username = localStorage.getItem("username")
  let history = useHistory();

    //______________________________Functions__________________________________

  const goProfile = () => {
    history.push('/Profile')
  }
  const goRecords = () => {
    history.push('/Records')
  }
  const goGames = () => {
    history.push('/Games')
  }

    //_______________________________Return___________________________________

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