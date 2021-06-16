import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import game1 from '../phaser/flappyCode'
import game0 from '../phaser/flappyStart'
import '../App.css';

/******************************************* PHASER ******************************************************/

class Game extends Component {
    state = {
        initialize: true,
        game: {
            width: "100vw",
            height: "80vh",
            type: Phaser.AUTO,
            backgroundColor: 0x87ceeb,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
            scene: [ game0, game1 ]
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