import Phaser from "phaser";
import holbie from './assets/images/holbie.png';


class flappystart extends Phaser.Scene {
    
    constructor() {
        super('flappystart');
    }

    preload() {
        this.load.image('bird', holbie);
    }

    clickToStart() {
        this.scene.start('flappy');
    }

    create() {
        this.add.text(this.sys.game.canvas.width/3 , this.sys.game.canvas.height/3 - 100, 'Flappy Holbie', { font: '5em Arial black' });
        this.add.text(this.sys.game.canvas.width/3 , this.sys.game.canvas.height/3 , 'CLICK TO START', { font: '5em Arial black' });
        this.bird = this.physics.add.sprite(80, this.sys.game.canvas.height / 2, 'bird').setScale(0.5);
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default flappystart;