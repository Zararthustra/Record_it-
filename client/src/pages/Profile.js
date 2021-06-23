import Axios from 'axios'
// import Navigation from '../components/Navigation';
import { AiFillStar } from 'react-icons/ai';
import React, { Component } from 'react';
import UserModal from '../components/Modal';
import gsap from 'gsap';
import Navigation from '../components/Navigation';


class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            userRecords: [],
            myGlobal: 0,
            username: localStorage.getItem("username"),
            userid: localStorage.getItem("userid"),
        }
    }
    //______________________________Functions__________________________________

    async componentDidMount() {

        //______________________________GET SCORES__________________________________

        const userGlobal =
            Axios.get('http://localhost:3001/apiroutes/userGlobal', {
                user_id: this.state.userid
            })
        this.setState({ myGlobal: userGlobal.global })

        const userRecords = await Axios.post('http://localhost:3001/apiroutes/getRecords', {
            user_id: this.state.userid
        })
        this.setState({ allRecords: userRecords.data })
    }

    //______________________________Return__________________________________

    render() {

        //______________________________Functions__________________________________

        // TOP FLAPPY
        const games = this.state.userRecords.map((record) => { return <div>{record.game_name}</div> })
        console.log(games);
        const records = this.state.userRecords.map((record) => { return <div>{record.record}</div> })
        console.log(records);
        const dates = this.state.userRecords.map((record) => {
            const cleanDate = new Date(record.updatedAt)
            return <div>{cleanDate.toDateString()}</div>
        })
        console.log(dates);
        console.log(this.state.myGlobal, 'heho');

        return (
            <>
                <div className="profile">
                    <Navigation />
                    <div className="profileContent">
                        <section className="name">
                            <h1>{this.state.username}</h1>
                        </section>
                        <section className="modifications">
                            <button onClick={() => this.setState({ open: true })}>Change Username and Password </button>
                            <UserModal open={this.state.open} onClose={() => this.setState({ open: false })} />
                        </section>
                        <section className="score">
                            <h2>{this.state.myGlobal ? this.state.myGlobal : 0} <AiFillStar className="star" /></h2>
                        </section>

                        <div className="tablediv">
                            <header><h2>My records</h2></header>
                            <table className="myrecords">
                                <thead>
                                    <tr>
                                        <th>Game</th>
                                        <th>Record</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {games}
                                        </td>
                                        <td>
                                            {records}
                                        </td>
                                        <td>
                                            {dates}
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
}

export default Profile;