import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Games = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/Home')
    }
    const goFlappy = () => {
        history.push('/Flappy')
      }
    return (
        <div className="profile">
            <h1>Games</h1>
            <button onClick={goHome}>Back to Home</button>
            <button onClick={goFlappy}>Play Flappy Holbie</button>
        </div>
    )
}

export default Games;