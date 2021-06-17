import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Games = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/Home')
    }
    const goFlappy = () => {
        history.push('/Flappy')
      }
    return (
        <div className="games">
            <Navigation />
            <button onClick={goHome}>Back to Home</button>
            <div className="gamesContent">
                <div className="jeu1">
                    <h3 id="g1">Img</h3>
                    <p id="desc1">Un certain nombre de villes sont célèbres pour leur taille spectaculaire.</p>
                    <button id="b1" onClick={goFlappy}>Play Flappy Holbie</button>
                </div>
                <div className="jeu2">
                    <h3>Img</h3>
                    <p>Un certain nombre de villes sont célèbres pour leur taille spectaculaire.</p>
                    <button id="b1" onClick={goFlappy}>Play Flappy Holbie</button> 
                </div>
                <div className="jeu1">
                    <h3 id="g1">Img</h3>
                    <p id="desc1">Un certain nombre de villes sont célèbres pour leur taille spectaculaire.</p>
                    <button id="b1" onClick={goFlappy}>Play Flappy Holbie</button>
                </div>
                <div className="jeu2">
                    <h3>Img</h3>
                    <p>Un certain nombre de villes sont célèbres pour leur taille spectaculaire.</p>
                    <button onClick={goFlappy}>Play Flappy Holbie</button>
                </div>
            </div>
        </div>
    )
}

export default Games;