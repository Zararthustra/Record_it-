import Axios from 'axios';
import Phaser from "phaser";
import ball from './assets/images/ball.png';
import palet from './assets/images/palet.png';
import brickimg from './assets/images/brick.png';
import deadbrickimg from './assets/images/deadbrick.png';
import backGround from './assets/images/BG.jfif';

const dev = false
const localHost = dev ? 'http://localhost:3001/' : '/'

let Record = 0;
let Score = 0;
let Life = 3;

// Check for previous record
function getRecord() {

    Axios.post(`${localHost}apiroutes/getRecord`, {
        user_id: localStorage.getItem("userid"),
        game_id: localStorage.getItem("gameid"),
    }).then((response) => {
        if (response.data[0]) Record = response.data[0].record
    })

}

class brickit extends Phaser.Scene {

    constructor() {

        super('brickit');
        getRecord()

    }

    //_______________________________Functions_________________________________

    hitBrick(ball, brick) {

        brick.disableBody(true, true);
        Score++

        if (this.bricks.countActive() === 0) {
            this.resetLevel();
        }

    }

    hitDeadBrick(ball, brick) {

        brick.disableBody(true, true);
        if (Score >= 10) Score -= 10
    }

    resetBall() {

        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, this.paddle.y - 50);
        this.ball.setData('onPaddle', true);

    }

    resetLevel() {

        this.resetBall();

        this.bricks.children.each(function (brick) {

            brick.enableBody(false, 0, 0, true, true);
        });
        this.deadbricks.children.each(function (deadbrick) {

            deadbrick.enableBody(false, 0, 0, true, true);
        });
        if (this.paddle.scaleX > 0.5) {
            this.paddle.scaleX = this.paddle.scaleX - 0.5
        }
    }

    hitPaddle(ball, paddle) {

        var diff = 0;

        if (ball.x < paddle.x) {
            // left side of the paddle
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x) {
            // right side of the paddle
            diff = ball.x - paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else {
            // perfectly in the middle
            ball.setVelocityX(2 + Math.random() * 8);
        }
    }

    gameOver() {

        Record = Math.max(Score, Record);

        // POST/PUT record in database
        Axios.put(`${localHost}apiroutes/addRecord`, {
            record: Record,
            user_id: localStorage.getItem("userid"),
            user_name: localStorage.getItem("username"),
            game_id: localStorage.getItem("gameid"),
            game_name: localStorage.getItem("gamename")
        }).then(() => {
            console.log("Insertion success");
        })

        this.scene.start('brickstart');
    }

    //_______________________________Preload___________________________________

    preload() {

        this.load.image('ball', ball);
        this.textures.addBase64('palet', palet);
        this.load.image('backGround', backGround);
        this.textures.addBase64('brick', brickimg)
        this.textures.addBase64('deadbrick', deadbrickimg)

    }

    //_______________________________Create___________________________________

    create() {
        this.add.image(175, 250, 'backGround')
        //score text
        this.scoreText = this.add.text(10, 10, '');

        // Disable floor
        this.physics.world.setBoundsCollision(true, true, true, false);

        // DEAD BRICK
        this.deadbricks = this.physics.add.staticGroup({
            key: 'deadbrick',
            frameQuantity: 5,
            gridAlign: { width: 5, height: 1, cellWidth: 64, cellHeight: 32, x: 50, y: 50 }
        });
        // BRICK
        this.bricks = this.physics.add.staticGroup({
            key: 'brick',
            frameQuantity: 30,
            gridAlign: { width: 5, height: 6, cellWidth: 64, cellHeight: 32, x: 50, y: 82 }
        });

        // BALL
        this.ball = this.physics.add.image(300, 400, 'ball')
            .setCollideWorldBounds(true)
            .setBounce(1)
            .setScale(0.1)
            .setData('onPaddle', true);

        // PADDLE
        this.paddle = this.physics.add.image(300, 450, 'palet')
            .setImmovable()
            .setScale(2, 1);

        // Colliders
        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
        this.physics.add.collider(this.ball, this.deadbricks, this.hitDeadBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

        // Inputs
        this.input.on('pointermove', function (pointer) {

            // Keep paddle in screen
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 0, 350);

            if (this.ball.getData('onPaddle')) {
                this.ball.x = this.paddle.x;
            }

        }, this);
        this.input.on('pointerup', function (pointer) {

            if (this.ball.getData('onPaddle')) {
                this.ball.setVelocity(-75, -300);
                this.ball.setData('onPaddle', false);
            }

        }, this);

    }

    //_______________________________Update___________________________________

    update() {

        //Score text
        this.scoreText.text = 'Record: ' + Record + ' Score: ' + Score + '      Vie: ' + Life

        if (this.ball.y > 500) {

            Life--

            if (Life === 0) {
                this.gameOver()
                Life = 3;
                Score = 0;
            }

            this.resetBall();
        }
    }
}

export default brickit;