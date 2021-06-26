import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';



const Games = () => {

    //______________________________Variables__________________________________

    let history = useHistory();
    
    const dev = false
    const localHost = dev ? 'http://localhost:3001/' : '/'

    //______________________________Functions__________________________________

    // SetLocalStorage of game info (create row if not exist)
    const goFlappy = () => {
        const id = 1
        const name = "FlappyHolbie"
        localStorage.setItem("gameid", id)
        localStorage.setItem("gamename", name)

        Axios.put(`${localHost}apiroutes/addGame`, {
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

        Axios.put(`${localHost}apiroutes/addGame`, {
            name: name,
            id: id
        })

        history.push('/Snake')
    }

    // SetLocalStorage of game info (create row if not exist)
    const goWhack = () => {
        const id = 3
        const name = "WhackAMalou"
        localStorage.setItem("gameid", id)
        localStorage.setItem("gamename", name)

        Axios.put(`${localHost}apiroutes/addGame`, {
            name: name,
            id: id
        })

        history.push('/WhackAMalou')
    }

    // Load all personnal records into localstorage
    Axios.post(`${localHost}apiroutes/getRecords`, {
        user_id: localStorage.getItem("userid"),
    }).then((response) => {
        if (response.data[0]) localStorage.setItem("record", JSON.stringify(response.data));
        else localStorage.setItem("record", 0);
    })

    //_______________________________Return___________________________________

    return (
        <>
            <Navigation />
            <div className="games">

                <div className="game">
                    <div className="holbie img"></div>
                    <h2>Flappy Holbie</h2>
                    <p>Similar to the famous Flappy bird game, you need to get through pipe holes as much as possible with simple clicks to make your holbie fly !</p>
                    <p className="devicegreen">Smartphone/Tablet</p>
                    <a href="" onClick={goFlappy}><span>Play</span></a>
                </div>

                <div className="game">
                    <div className="snake img"></div>
                    <h2>Snake</h2>
                    <p>Similar to the famous Nokia 3310 snake game, the goal is to get as much food as possible while trying to not eating your tail that grows as you get fed.</p>
                    <p className="devicered">Smartphone/Tablet</p>
                    <a href="" onClick={goSnake}><span>Play</span></a>
                </div>

                <div className="game">
                    <div className="whack img"></div>
                    <h2>Whack A Malou</h2>
                    <p>Similar to the famous whack-a-mole funfair game, the goal is to whack as much Malou as possible within 30 seconds</p>
                    <p className="devicegreen">Smartphone/Tablet</p>
                    <a href="" onClick={goWhack}><span>Play</span></a>
                </div>

            </div>
        </>
    )
}

export default Games;