import Axios from 'axios';
import Phaser from "phaser";
import pipebot from './assets/images/pipebot.png';
import pipetop from './assets/images/pipetop.png';
import holbie from './assets/images/holbie.png';

const dev = false
const localHost = dev ? 'http://localhost:3001/' : '/'

const gameOptions = {

    // bird gravity, will make bird fall if you dont flap
    birdGravity: 800,

    // horizontal bird speed
    birdSpeed: 130,

    // increase bird speed each 50pts steps
    speedsteps: [50, 150, 200, 250, 300, 350, 400, 450, 500],

    // flap thrust
    birdFlapPower: 250,

    // minimum pipe height, in pixels. Affects hole position
    minPipeHeight: 40,

    // distance range from next pipe, in pixels
    pipeDistance: [170, 190],

    // hole range between pipes, in pixels
    pipeHole: [140, 140],

    //highscore variable
    topScore: 0,
};

// Check for previous record
function getRecord() {
    Axios.post(`${localHost}apiroutes/getRecord`, {
        user_id: localStorage.getItem("userid"),
        game_id: localStorage.getItem("gameid"),
    }).then((response) => {
        if (response.data[0]) gameOptions.topScore = response.data[0].record
    })
}

class flappy extends Phaser.Scene {

    constructor() {
        super('flappy');
        getRecord()
    }

    //_______________________________Preload___________________________________

    preload() {
        this.load.image('bird', holbie);
        this.load.image('pipebot', pipebot);
        this.load.image('pipetop', pipetop);
    }

    //_______________________________Create___________________________________

    create() {
        this.pipeGroup = this.physics.add.group();
        this.pipePool = [];
        for (let i = 0; i < 5; i++) {
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipetop').setScale(0.9));
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipebot').setScale(0.9));
            this.placePipes(false);
        }
        this.pipeGroup.setVelocityX(-gameOptions.birdSpeed);
        this.bird = this.physics.add.sprite(80, this.sys.game.canvas.height / 2, 'bird').setScale(0.3).setSize(100, 200);
        this.bird.body.gravity.y = gameOptions.birdGravity;
        this.input.on('pointerdown', this.flap, this);
        this.score = 0;
        this.scoreText = this.add.text(10, 10, '');
        this.updateScore(this.score);
    }

    updateScore(inc) {
        this.score += inc;
        this.scoreText.text = 'Score: ' + this.score + '\nRecord: ' + gameOptions.topScore;
        if (gameOptions.speedsteps.includes(this.score)) {
            this.pipeGroup.setVelocityX(- (gameOptions.birdSpeed += 70))
            console.log(gameOptions.birdSpeed += 70);
        }
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

    //_______________________________Update___________________________________

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
        gameOptions.topScore = Math.max(this.score, gameOptions.topScore);
        const record = gameOptions.topScore
        //set bird speed to initial value
        gameOptions.birdSpeed = 130
        // POST/PUT record in database
        Axios.put(`${localHost}apiroutes/addRecord`, {
            record: record,
            user_id: localStorage.getItem("userid"),
            user_name: localStorage.getItem("username"),
            game_id: localStorage.getItem("gameid"),
            game_name: localStorage.getItem("gamename")
        }).then(() => {
            console.log("Insertion success");
        })

        this.scene.start('flappystart');
    }
}

export default flappy;