import Phaser from "phaser";
import mouse from './assets/images/mousehead.png';
import ballstart from './assets/images/ball.png';
import backGround from './assets/images/BG.jfif';


class brickstart extends Phaser.Scene {
    
    constructor() {
        super('brickstart');
    }

    preload() {
        this.load.image('ballstart', ballstart);
        this.load.image('backGround', backGround);
    }

    clickToStart() {
        this.scene.start('brickit');
    }

    create() {
        this.add.image(175, 250, 'backGround')
        this.add.text(175, 200, 'BRICK !T', { font: '3em Arial black' }).setOrigin(0.5);
        this.add.text(175, 250, 'CL!CK TO START', { font: '3em Arial black' }).setOrigin(0.5);
        this.physics.add.sprite(300, 400, 'ballstart').setScale(0.1);
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default brickstart;