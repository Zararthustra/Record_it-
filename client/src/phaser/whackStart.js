import Phaser from "phaser";
import mouse from './assets/images/mousehead.png';
import bg from './assets/images/floor.jpg';


class whackstart extends Phaser.Scene {
    
    constructor() {
        super('whackstart');
    }

    preload() {
        this.load.image('mouse', mouse);
        this.load.image('bg', bg);
    }

    clickToStart() {
        this.scene.start('whackamalou');
    }

    create() {
        this.add.image(175, 250, 'bg').setScale(0.85);
        this.add.text(50 , 50, 'Whack a Malou', { font: '3em Arial black' });
        this.add.text(40 , 350, 'CLICK TO START', { font: '3em Arial black' });
        this.physics.add.sprite(175, 200, 'mouse');
        this.input.on('pointerdown', this.clickToStart, this);
    }
}

export default whackstart;