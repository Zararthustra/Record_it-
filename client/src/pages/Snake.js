import Phaser from 'phaser'
import React, { Component } from 'react'
import { IonPhaser } from '@ion-phaser/react'
import snakegame from '../phaser/snakeCode'
import snakestart from '../phaser/snakeStart'


class Game extends Component {
    state = {
        initialize: true,
        game: {
            width: 640,
            height: 480,
            type: Phaser.AUTO,
            backgroundColor: '#fff',
            scene: [ snakestart, snakegame ]
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