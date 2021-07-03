import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Games = () => {

    //______________________________Variables__________________________________

    const dev = false
    const localHost = dev ? 'http://localhost:3001/' : '/'

    let history = useHistory();

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

    const goBrick = () => {
        const id = 4
        const name = "BrickIt"
        localStorage.setItem("gameid", id)
        localStorage.setItem("gamename", name)

        Axios.put(`${localHost}apiroutes/addGame`, {
            name: name,
            id: id
        })

        history.push('/BrickIt')
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
            <div className="gamesbody">
                <div className="games">

                    <div className="game">
                        <div className="holbie img"></div>
                        <h2>Flappy Holbie</h2>
                        <p className="devicegreen">Mobile/Tablette</p>
                        <a href="" onClick={goFlappy}><span>Play</span></a>
                    </div>

                    <div className="game">
                        <div className="snake img"></div>
                        <h2>Snake</h2>
                        <p className="devicered">Mobile/Tablette</p>
                        <a href="" onClick={goSnake}><span>Play</span></a>
                    </div>

                    <div className="game">
                        <div className="whack img"></div>
                        <h2>Whack A Malou</h2>
                        <p className="devicegreen">Mobile/Tablette</p>
                        <a href="" onClick={goWhack}><span>Play</span></a>
                    </div>

                    <div className="game">
                        <div className="brick img"></div>
                        <h2>Brick !t</h2>
                        <p className="devicegreen">Mobile/Tablette</p>
                        <a href="" onClick={goBrick}><span>Play</span></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Games;