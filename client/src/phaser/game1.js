import Axios from 'axios'
import Phaser from "phaser";
import pipebot from './assets/images/pipebot.png';
import pipetop from './assets/images/pipetop.png';
import holbie from './assets/images/holbie.png';

const gameOptions = {

    // bird gravity, will make bird fall if you dont flap
    birdGravity: 900,

    // horizontal bird speed
    birdSpeed: 150,

    // flap thrust
    birdFlapPower: 300,

    // minimum pipe height, in pixels. Affects hole position
    minPipeHeight: 50,

    // distance range from next pipe, in pixels
    pipeDistance: [220, 280],

    // hole range between pipes, in pixels
    pipeHole: [210, 230],

    // local storage object name
    localStorageName: 'bestFlappyScore'
};
class game1 extends Phaser.Scene {
    constructor() {
        super('game1');
    }
    preload() {
        this.load.image('bird', holbie);
        this.load.image('pipebot', pipebot);
        this.load.image('pipetop', pipetop);
    }
    create() {
        this.pipeGroup = this.physics.add.group();
        this.pipePool = [];
        for (let i = 0; i < 5; i++) {
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipetop').setScale(1, 1.5));
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipebot').setScale(1, 1.5));
            this.placePipes(false);
        }
        this.pipeGroup.setVelocityX(-gameOptions.birdSpeed);
        this.bird = this.physics.add.sprite(80, this.sys.game.canvas.height / 2, 'bird').setScale(0.5);
        this.bird.body.gravity.y = gameOptions.birdGravity;
        this.input.on('pointerdown', this.flap, this);
        this.score = 0;
        this.topScore = localStorage.getItem(gameOptions.localStorageName) == null ? 0 : localStorage.getItem(gameOptions.localStorageName);
        this.scoreText = this.add.text(10, 10, '');
        this.updateScore(this.score);
    }
    updateScore(inc) {
        this.score += inc;
        this.scoreText.text = 'Score: ' + this.score + '\nBest: ' + this.topScore;
    }
    placePipes(addScore) {
        let rightmost = this.getRightmostPipe();
        let pipeHoleHeight = Phaser.Math.Between(gameOptions.pipeHole[0], gameOptions.pipeHole[1]);
        let pipeHolePosition = Phaser.Math.Between(gameOptions.minPipeHeight + pipeHoleHeight / 2, this.sys.game.canvas.height - gameOptions.minPipeHeight - pipeHoleHeight / 2);
        this.pipePool[0].x = rightmost + this.pipePool[0].getBounds().width + Phaser.Math.Between(gameOptions.pipeDistance[0], gameOptions.pipeDistance[1]);
        this.pipePool[0].y = pipeHolePosition - pipeHoleHeight / 2;
        this.pipePool[0].setOrigin(0, 1);
        this.pipePool[1].x = this.pipePool[0].x;
        this.pipePool[1].y = pipeHolePosition + pipeHoleHeight / 2;
        this.pipePool[1].setOrigin(0, 0);
        this.pipePool = [];
        if (addScore) {
            this.updateScore(1);
        }
    }
    flap() {
        this.bird.body.velocity.y = -gameOptions.birdFlapPower;
    }
    getRightmostPipe() {
        let rightmostPipe = 0;
        this.pipeGroup.getChildren().forEach(function (pipe) {
            rightmostPipe = Math.max(rightmostPipe, pipe.x);
        });
        return rightmostPipe;
    }
    update() {
        if (this.bird.angle < 20) {
            this.bird.angle += 0.6
        }
        if (this.input.activePointer.buttons && this.bird.angle > -30) {
            this.bird.angle -= 5
        }
        this.physics.world.collide(this.bird, this.pipeGroup, function () {
            this.die();
        }, null, this);
        if (this.bird.y > this.sys.game.canvas.height || this.bird.y < 0) {
            this.die();
        }
        this.pipeGroup.getChildren().forEach(function (pipe) {
            if (pipe.getBounds().right < 0) {
                this.pipePool.push(pipe);
                if (this.pipePool.length === 2) {
                    this.placePipes(true);
                }
            }
        }, this)
    }
    die() {
        localStorage.setItem(gameOptions.localStorageName, Math.max(this.score, this.topScore));
        localStorage.setItem('test', 32);
        this.scene.start('game1');

        // POST record in database
        Axios.put('http://localhost:3001/apiroutes/addRecord', {
            record: this.topScore,
            user_id: localStorage.getItem("userid")
        }).then(() => {
            console.log("Insertion success");
        })
    }
}

export default game1;