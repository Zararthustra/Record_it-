import Phaser from 'phaser'
import React, { Component } from 'react'
import { IonPhaser } from '@ion-phaser/react'
import brickit from '../phaser/brickCode'
import brickstart from '../phaser/brickStart'
import Game from '../components/Game';


class PhaserGame extends Component {
    state = {
        initialize: true,
        game: {
            width: 350,
            height: 500,
            type: Phaser.AUTO,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                }
            },
            scene: [ brickstart, brickit ],
        }
    }

    render() {

        const { initialize, game } = this.state

        return (
            <div>
                <div className="phaser">
                    <Game />
                    <IonPhaser game={game} initialize={initialize} />
                </div>
            </div>
        )
    }
}

export default PhaserGame;