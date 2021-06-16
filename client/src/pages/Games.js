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
        const name = "FlappyHolbie"
        localStorage.setItem("gameid", id)
        localStorage.setItem("gamename", name)

        Axios.put('http://localhost:3001/apiroutes/addGame', {
            name: name,
            id: id
        })

        history.push('/Flappy')
    }
    Axios.post('http://localhost:3001/apiroutes/getRecords', {
        user_id: localStorage.getItem("userid"),
        game_id: localStorage.getItem("gameid")
    }).then((response) => {
        if (response.data[0]) localStorage.setItem("record", JSON.stringify(response.data));
        else localStorage.setItem("record", 0);
    })
    return (
        <div className="profile">
            <h1>Games</h1>
            <button onClick={goHome}>Back to Home</button>
            <button onClick={goFlappy}>Play Flappy Holbie</button>
        </div>
    )
}

export default Games;