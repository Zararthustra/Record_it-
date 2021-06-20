import Phaser from 'phaser'
import React, { Component } from 'react'
import { IonPhaser } from '@ion-phaser/react'
import snakegame from '../phaser/snakeCode'
import snakestart from '../phaser/snakeStart'
import Game from '../components/Game';


class PhaserGame extends Component {
    state = {
        initialize: true,
        game: {
            width: 640,
            height: 480,
            type: Phaser.AUTO,
            backgroundColor: '#fff',
            scene: [snakestart, snakegame]
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