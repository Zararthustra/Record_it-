import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';



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
        <div className="games">
            <Navigation />
            <button onClick={goHome}>Back to Home</button>
            <div className="gamesContent">
                <div className="jeu1">
                    <h3 id="g1">Flappy Img</h3>
                    <p id="desc1">Similar to the famous Flappy bird...</p>
                    <button id="b1" onClick={goFlappy}>Play Flappy Holbie</button>
                </div>
                <div className="jeu2">
                    <h3>Snake Img</h3>
                    <p>Similar to the famous 3310 snake...</p>
                    <button id="b1" onClick={goSnake}>Play Snake</button> 
                </div>
            </div>
        </div>
    )
}

export default Games;