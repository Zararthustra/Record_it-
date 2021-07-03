import React from 'react';
import { useHistory } from 'react-router-dom';

const Game = () => {
    
    //______________________________Variables__________________________________

    let history = useHistory();

    //______________________________Functions__________________________________

    const goHome = () => {
        history.push('/Home')
    }
    const goGames = () => {
        history.push('/Games')
    }

    //_______________________________Return___________________________________

    return (
        <>
            <div className="gamenav">
                <button onClick={goHome} className="raise">Accueil</button>
                <button onClick={goGames} className="raise">Jeux</button>
            </div>
        </>
    );
};

export default Game;