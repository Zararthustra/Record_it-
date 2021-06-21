import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import flappy from '../phaser/flappyCode';
import Game from '../components/Game';
import flappystart from '../phaser/flappyStart';


class PhaserGame extends Component {
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
            scene: [flappystart, flappy]
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