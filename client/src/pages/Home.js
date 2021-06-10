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

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="routes">
        <button onClick={goProfile}>Go to Profile</button>
        <button onClick={goRecords}>Go to Records</button>
        <button onClick={goGames}>Go to Games</button>
      </div>
    </div>
  );
};

export default Home;