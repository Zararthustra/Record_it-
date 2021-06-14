import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Games = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/Home')
    }
    const goFlappy = () => {
        const id = 1
        localStorage.setItem("gameid", id)
        const name = "FlappyHolbie"

        Axios.put('http://localhost:3001/apiroutes/addGame', {
            name: name,
            id: id
        })

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