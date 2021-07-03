import Axios from 'axios';
import cheese1 from './assets/images/cheeses1.png'
import floor from './assets/images/floor.jpg'
import mouse from './assets/images/mousehead.png'
import Phaser from "phaser";


//______________________________Variables__________________________________

const dev = true
const localHost = dev ? 'http://localhost:3001/' : '/'

let Record = localStorage.getItem("whackrecord") ? localStorage.getItem("whackrecord") : 0
let Score = 0;
let startTime;
let endTime;

let mouse1;
let mouse2;
let mouse3;
let mouse4;
let mouse5;
let mouse6;
let mouse7;
let mouse8;
let mouse9;

// Check for previous record
function getRecord() {
    Axios.post(`${localHost}apiroutes/getRecord`, {
        user_id: localStorage.getItem("userid"),
        game_id: localStorage.getItem("gameid"),
    }).then((response) => {
        if (response.data[0]) Record = response.data[0].record
        else Record = localStorage.getItem("whackrecord") ? localStorage.getItem("whackrecord") : 0
    })
}


class whackamalou extends Phaser.Scene {

    constructor() {
        super('whackamalou');
        getRecord()
    }

    //_______________________________Preload___________________________________

    preload() {
        this.load.image('cheese1', cheese1);
        this.load.image('floor', floor);
        this.load.image('mouse', mouse);
    }

    //_______________________________Functions___________________________________

    popMouse(x, y) {
        const XPosition = 25 + 50 + ((x - 1) * 100)
        const YPosition = 100 + 50 + ((y - 1) * 150)
        const mouseHeight = 90

        const mouse = this.physics.add.sprite(XPosition, YPosition, 'mouse').setScale(0.5).setInteractive();
        mouse.name = "mouse";

        this.tweens.add({
            targets: mouse,
            y: YPosition - mouseHeight,
            //ease: 'Cubic.easeIn',
            ease: 'Quad.easeIn',
            yoyo: true,
            angle: 0,
            duration: Phaser.Math.Between(700, 2000),
            offset: 5000,
            repeatDelay: Phaser.Math.Between(2000, 5000),
            repeat: -1
        });
        return mouse
    }

    popCheese(x, y) {
        const XPosition = 25 + 50 + ((x - 1) * 100)
        const YPosition = 100 + 50 + ((y - 1) * 150)
        const cheese = this.physics.add.image(XPosition, YPosition, 'cheese1').setScale(0.35).setInteractive().setDepth(1);
        cheese.name = "cheese"
        return cheese
    }

    gameOver() {
        Record = Math.max(Score, Record);
        localStorage.setItem("whackrecord", Record)

        //POST/PUT record in database
        Axios.put(`${localHost}apiroutes/addRecord`, {
            record: Record,
            user_id: localStorage.getItem("userid"),
            user_name: localStorage.getItem("username"),
            game_id: localStorage.getItem("gameid"),
            game_name: localStorage.getItem("gamename")
        }).then(() => {
            console.log("Insertion success");
        })
        Score = 0
        this.scene.start('whackstart');
    }
    //_______________________________Create___________________________________

    create() {
        startTime = Math.round(this.time.now / 1000)
        //BackGround
        this.add.image(175, 250, 'floor').setScale(0.85);
        //score text
        this.scoreText = this.add.text(10, 10, '');
        //cheeses
        this.popCheese(1, 1)
        this.popCheese(1, 2)
        this.popCheese(1, 3)
        this.popCheese(2, 1)
        this.popCheese(2, 2)
        this.popCheese(2, 3)
        this.popCheese(3, 1)
        this.popCheese(3, 2)
        this.popCheese(3, 3)

        //mice
        mouse1 = this.popMouse(1, 1)
        mouse2 = this.popMouse(1, 2)
        mouse3 = this.popMouse(1, 3)
        mouse4 = this.popMouse(2, 1)
        mouse5 = this.popMouse(2, 2)
        mouse6 = this.popMouse(2, 3)
        mouse7 = this.popMouse(3, 1)
        mouse8 = this.popMouse(3, 2)
        mouse9 = this.popMouse(3, 3)



        // user click/touch input
        this.input.on('gameobjectdown', function (pointer, gameObject) {
            if (gameObject.name === 'mouse') {
                Score += 1;
                gameObject.destroy()
            }
        });

    }

    //_______________________________Update___________________________________

    update() {
        let countDown = 30 - (Math.round(this.time.now / 1000) - startTime)
        this.scoreText.text = 'Record: ' + Record + '\nScore: ' + Score + '\nTemps: ' + countDown

        if (!mouse1.active) mouse1 = this.popMouse(1, 1)
        if (!mouse2.active) mouse2 = this.popMouse(1, 2)
        if (!mouse3.active) mouse3 = this.popMouse(1, 3)
        if (!mouse4.active) mouse4 = this.popMouse(2, 1)
        if (!mouse5.active) mouse5 = this.popMouse(2, 2)
        if (!mouse6.active) mouse6 = this.popMouse(2, 3)
        if (!mouse7.active) mouse7 = this.popMouse(3, 1)
        if (!mouse8.active) mouse8 = this.popMouse(3, 2)
        if (!mouse9.active) mouse9 = this.popMouse(3, 3)

        if (countDown == 0) {
            this.gameOver()
        }

    }
}

export default whackamalou;