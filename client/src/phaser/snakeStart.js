import Phaser from "phaser";
import head from './assets/images/head.png';
import grass from './assets/images/grass.png'


class snakestart extends Phaser.Scene {

    constructor() {
        super('snakestart');
    }

    preload() {
        this.load.image('head', head);
        this.load.image('grass', grass);
    }

    clickToStart() {
        this.scene.start('snakegame');
    }

    create() {
        this.add.image(320, 260, 'grass').setScale(1);
        this.add.text(280, 200 - 100, 'Snake', { font: '5em Arial black', color: '#000' });
        this.add.text(100, 240, 'CLICK TO START', { font: '5em Arial black', color: '#000' });
        this.add.image(150, 130, 'head').setScale(0.5);
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default snakestart;