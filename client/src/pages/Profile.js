import Axios from 'axios'
// import Navigation from '../components/Navigation';
import  { AiFillStar } from 'react-icons/ai';
import React, { Component } from 'react';
import Modal from '../components/Modal';


class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            globalScore: [],
            userName: '',
            user_id: null,
            open: false,
            showMe: true
        }
    }
    
    async componentDidMount() {

        const userName = localStorage.getItem('username');
        this.setState({ userName: userName })

        const globalScore = await Axios.post('http://localhost:3001/apiroutes/getRecord', {
            user_id: 1,
            game_id: 1
        })    
        this.setState({ globalScore: globalScore.data });
    };
    
    //______________________________Return__________________________________
    
    render () {

    
        //______________________________Functions__________________________________
    
        const globalScore = this.state.globalScore.record;
        const userName = this.state.userName;

        return (
            <>
                <div className="profile">
                    {/* <Navigation/> */}
                    <div className="profileContent">
                        <section className="details">
                            <h2>{userName}</h2>
                            <h4>Global score: {globalScore} <AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/></h4>
                        </section>
                        <section className="modifications">
                            <ul>
                                <li>
                                    <button onClick={() => this.setState({ open: true })}>Change password </button>
                                    <Modal open={this.state.open} onClose={() => this.setState({ open: false })} />
                                </li>
                                <li>
                                    <button>Change Username</button>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;