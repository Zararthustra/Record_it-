import Phaser from "phaser";
import head from './assets/images/head.png';


class snakestart extends Phaser.Scene {

    constructor() {
        super('snakestart');
    }

    preload() {
        this.load.image('head', head);
    }

    clickToStart() {
        this.scene.start('snakegame');
    }

    create() {
        this.add.text(350, 100, 'Snake', { font: '5em Arial black', color: '#fff' });
        this.add.text(100, 240, 'CLICK TO START', { font: '5em Arial black', color: '#fff' });
        this.add.text(20 , 400 , '/!\\ from 20pts, speed up every 5pts /!\\', { font: '3em Arial black', color: 'red' });

        this.add.image(200, 130, 'head').setScale(0.5);
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default snakestart;