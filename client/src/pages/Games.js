import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';


const Games = () => {

    //______________________________Variables__________________________________

    let history = useHistory();

    //______________________________Functions__________________________________

    const goHome = () => {
        history.push('/Home')
    }

    // SetLocalStorage of game info (create row if not exist)
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

    // SetLocalStorage of game info (create row if not exist)
    const goSnake = () => {
        const id = 2
        const name = "Snake"
        localStorage.setItem("gameid", id)
        localStorage.setItem("gamename", name)

        Axios.put('http://localhost:3001/apiroutes/addGame', {
            name: name,
            id: id
        })

        history.push('/Snake')
    }

    // Load all personnal records into localstorage
    Axios.post('http://localhost:3001/apiroutes/getRecords', {
        user_id: localStorage.getItem("userid"),
    }).then((response) => {
        if (response.data[0]) localStorage.setItem("record", JSON.stringify(response.data));
        else localStorage.setItem("record", 0);
    })
    
    //_______________________________Return___________________________________

    return (
        <div className="profile">
            <h1>Games</h1>
            <button onClick={goHome}>Back to Home</button>
            <button onClick={goFlappy}>Play Flappy Holbie</button>
            <button onClick={goSnake}>Play Snake</button>
        </div>
    )
}

export default Games;