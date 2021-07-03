import React, { Component } from 'react';
import Axios from 'axios';
import linkedin from '../styles/images/linkedin.png'
import github from '../styles/images/github.png'
import mail from '../styles/images/mail.png'
import Navigation from '../components/Navigation';

const dev = false
const localHost = dev ? 'http://localhost:3001/' : '/'

class Contact extends Component {

    //______________________________Constructor__________________________________

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            name: localStorage.getItem("username"),
            userid: localStorage.getItem("userid")
        }
    }

    //______________________________Functions__________________________________
    async componentDidMount() {

        const addComment = () => {
            //    await Axios.post(`${localHost}apiroutes/create`, {
            //        name: name,
            //        user_id: userid,
            //        comment: comment
            //    })
        }

        const getComments = () => { }

    }

    //_______________________________Render___________________________________

    render() {
        //_______________________________Return___________________________________

        return (
            <>
                <Navigation />
                <div className="contact">
                    <h1>Me contacter</h1>

                    <div className="links">
                        <div className="link">
                            <a href="https://www.linkedin.com/in/mayerarthur/">
                                <img src={linkedin}></img>
                            </a>
                        </div>

                        <div className="link">
                            <a href="https://github.com/Zararthustra">
                                <img src={github}></img>
                            </a>
                        </div>

                        <div className="link">
                            <a href="mailto:arthmayer@outlook.fr">
                                <img src={mail}></img>
                            </a>
                        </div>

                    </div>

                    <h1>Commentaires & Suggestions</h1>
                    <h2>Bientôt displonible !</h2>


                </div>
            </>
        )
    }
}

export default Contact;

/*
<div className="comments">
                        <div className="mycomment">
                            <h2>{this.state.name}</h2>
                            <input type="text" onChange={(event) => {
                                this.setState({ comment: event.target.value })
                            }} />
                            <button onClick={this.addComment}>Envoyer</button>
                        </div>

                        <div className="allcomments">
                            <h2>Pseudo</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            </p>
                        </div>
                    </div>
                    */