import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import snake from '../phaser/snakeCode'
import '../App.css';

/******************************************* PHASER ******************************************************/

class Game extends Component {
    state = {
        initialize: true,
        game: {
            width: "80vw",
            height: "80vh",
            type: Phaser.AUTO,
            backgroundColor: '#bfcc00',
            scene: [ snake ]
        }
    }

    render() {

        const { initialize, game } = this.state
        return (
            <div>
                <div className="phaser">
                    <h1>
                        <a href="http://localhost:3000/Home">GO BACK HOME</a>
                    </h1>
                    <IonPhaser game={game} initialize={initialize} />
                </div>
            </div>
        )
    }
}

export default Game;