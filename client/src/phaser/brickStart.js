import Phaser from "phaser";
import ballstart from './assets/images/ball.png';
import deadbrick from './assets/images/deadbrick.png';
import brickimg from './assets/images/brick.png';
import backGround from './assets/images/BG.jfif';


class brickstart extends Phaser.Scene {
    
    constructor() {
        super('brickstart');
    }

    preload() {
        this.load.image('ballstart', ballstart);
        this.textures.addBase64('brick', brickimg)
        this.textures.addBase64('deadbrick', deadbrick)
        this.load.image('backGround', backGround);
    }

    clickToStart() {
        this.scene.start('brickit');
    }

    create() {
        this.add.image(175, 250, 'backGround')
        this.physics.add.image(50, 80, 'deadbrick')
        this.add.text(130, 65, '-10 points', { font: '3em Arial black' })
        this.physics.add.image(50, 160, 'brick')
        this.add.text(130, 145, '+1 point', { font: '3em Arial black' })

        this.add.text(175, 250, 'BRICK !T', { font: '3em Arial black' }).setOrigin(0.5);
        this.add.text(175, 300, 'CL!CK TO START', { font: '3em Arial black' }).setOrigin(0.5);
        this.physics.add.image(300, 400, 'ballstart').setScale(0.1);
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default brickstart;