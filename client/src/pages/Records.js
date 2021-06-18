import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../components/Navigation';
import $ from 'jquery';


class Records extends Component {

    //______________________________Constructor__________________________________
    constructor(props) {
        super(props);

        this.state = {
            topFlappyRecords: [],
            topSnakeRecords: [],
            flappyRecords: [],
            snakeRecords: [],
            showMe: true
        }
    }


    //________________________________DB Call_________________________________

    async componentDidMount() {
        //TOP3 records
        //FLAPPY
        const topFlappyRecords = await Axios.post('http://localhost:3001/apiroutes/topGameRecords', {
            game_id: 1 //flappy game_id
        })
        this.setState({ topFlappyRecords: topFlappyRecords.data });

        //SNAKE
        const topSnakeRecords = await Axios.post('http://localhost:3001/apiroutes/topGameRecords', {
            game_id: 2 //snake game_id
        })
        this.setState({ topSnakeRecords: topSnakeRecords.data });

        //All records
        //FLAPPY
        const flappyRecords = await Axios.post('http://localhost:3001/apiroutes/gameRecords', {
            game_id: 1 //flappy game_id
        })
        this.setState({ flappyRecords: flappyRecords.data });

        //SNAKE
        const snakeRecords = await Axios.post('http://localhost:3001/apiroutes/gameRecords', {
            game_id: 2 //snake game_id
        })
        this.setState({ snakeRecords: snakeRecords.data });
    };

    //_______________________________Render___________________________________

    render() {

        //______________________________Variables__________________________________
        // TOP FLAPPY
        const topFlappyRecords = this.state.topFlappyRecords.map(record => <div>{record.record}</div>)
        const topFlappyUsers = this.state.topFlappyRecords.map(record => <div>{record.user_name}</div>)
        const topFlappyDate = this.state.topFlappyRecords.map(record => {
            const cleanDate = new Date(record.createdAt)
            return <div>{cleanDate.toDateString()}</div>
        })
        // ALL FLAPPY
        const flappyRecords = this.state.flappyRecords.map(record => <div>{record.record}</div>)
        const flappyUsers = this.state.flappyRecords.map(record => <div>{record.user_name}</div>)
        const flappyDate = this.state.flappyRecords.map(record => {
            const cleanDate = new Date(record.createdAt)
            return <div>{cleanDate.toDateString()}</div>
        })

        // TOP SNAKE
        const topSnakeRecords = this.state.topSnakeRecords.map(record => <div>{record.record}</div>)
        const topSnakeUsers = this.state.topSnakeRecords.map(record => <div>{record.user_name}</div>)
        const topSnakeDate = this.state.topSnakeRecords.map(record => {
            const cleanDate = new Date(record.createdAt)
            return <div>{cleanDate.toDateString()}</div>
        })
        // ALL SNAKE
        const snakeRecords = this.state.snakeRecords.map(record => <div>{record.record}</div>)
        const snakeUsers = this.state.snakeRecords.map(record => <div>{record.user_name}</div>)
        const snakeDate = this.state.snakeRecords.map(record => {
            const cleanDate = new Date(record.createdAt)
            return <div>{cleanDate.toDateString()}</div>
        })

        const switchState = () => {
            if (this.state.showMe === true) {

                this.setState({ showMe: false });
            } else {
                this.setState({ showMe: true });
            }
        }
        
        if (this.state.showMe === true) {
            return (
                <>
                    <Navigation />
                    <div className="allrecords">
                        <a onClick={switchState}><span>All records</span></a>
                        <h1>TOP 3</h1>
                        <div className="allgametables">
                            <div className="gametable">
                                <header><h2>Flappy Holbie</h2></header>
                                <table className="recordtable">
                                    <thead>
                                        <tr>
                                            <th>Record</th>
                                            <th>User</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {topFlappyRecords}
                                            </td>
                                            <td>
                                                {topFlappyUsers}
                                            </td>
                                            <td>
                                                {topFlappyDate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="gametable">
                                <header><h2>Snake</h2></header>
                                <table className="recordtable">
                                    <thead>
                                        <tr>
                                            <th>Record</th>
                                            <th>User</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {topSnakeRecords}
                                            </td>
                                            <td>
                                                {topSnakeUsers}
                                            </td>
                                            <td>
                                                {topSnakeDate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (this.state.showMe === false) {
            return (
                <>
                    <Navigation />
                    <div className="allrecords">
                        <a onClick={switchState}><span>Top3</span></a>
                        <h1>All records</h1>
                        <div className="allgametables">
                            <div className="gametable">
                                <header><h2>Flappy Holbie</h2></header>
                                <table className="recordtable">
                                    <thead>
                                        <tr>
                                            <th>Record</th>
                                            <th>User</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {flappyRecords}
                                            </td>
                                            <td>
                                                {flappyUsers}
                                            </td>
                                            <td>
                                                {flappyDate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="gametable">
                                <header><h2>Snake</h2></header>
                                <table className="recordtable">
                                    <thead>
                                        <tr>
                                            <th>Record</th>
                                            <th>User</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {snakeRecords}
                                            </td>
                                            <td>
                                                {snakeUsers}
                                            </td>
                                            <td>
                                                {snakeDate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        //_______________________________Return___________________________________
        return (
            <div className="records">
                <h1>Records</h1>
            </div>
        )
    }
}

export default Records;