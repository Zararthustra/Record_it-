import React, { Component } from 'react';
import Axios from 'axios';
import linkedin from '../styles/images/linkedin.png'
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
            comments: [],
            name: localStorage.getItem("username"),
            userid: localStorage.getItem("userid"),
            commentAdded: ''
        }
    }

    //______________________________Functions__________________________________

    async componentDidMount() {

        const getComments =
            await Axios.get(`${localHost}apiroutes/getComments`)

        this.setState({ comments: getComments.data });
    }

    //_______________________________Render___________________________________

    render() {

        const addComment = () => {
            if (this.state.comment.length < 5) {

                this.setState({
                    commentAdded:
                        <div className="contact">
                            <div class="emoji  emoji--wow">
                                <div class="emoji__face">
                                    <div class="emoji__eyebrows"></div>
                                    <div class="emoji__eyes"></div>
                                    <div class="emoji__mouth"></div>
                                </div>
                            </div>
                            <div className="error">Le commentaire doit contenir plus de 4 caractères !</div>
                            <a href='/Contact'><button>Compris</button></a>
                        </div>
                });

            } else if (this.state.comment.length > 255) {

                this.setState({
                    commentAdded:
                        <div className="contact">
                            <div class="emoji  emoji--wow">
                                <div class="emoji__face">
                                    <div class="emoji__eyebrows"></div>
                                    <div class="emoji__eyes"></div>
                                    <div class="emoji__mouth"></div>
                                </div>
                            </div>
                            <div className="error">Le commentaire doit contenir moins de 256 caractères !</div>
                            <a href='/Contact'><button>Compris</button></a>
                        </div>
                });

            } else {

                Axios.post(`${localHost}apiroutes/addComment`, {
                    user_name: this.state.name,
                    user_id: this.state.userid,
                    comment: this.state.comment
                }).then((response) => {
                    if (response) {
                        this.setState({
                            commentAdded:
                                <div className="contact">
                                    <div class="emoji  emoji--yay">
                                        <div class="emoji__face">
                                            <div class="emoji__eyebrows"></div>
                                            <div class="emoji__mouth"></div>
                                        </div>
                                    </div>
                                    <h3>Merci pour ton commentaire, il sera lu avec attention.</h3>
                                    <a href='/Contact'><button>Retour</button></a>
                                </div>
                        })
                    }
                })
            }
        }

        const comments = this.state.comments.map(comment => {
            return (
                <>
                    <h2 className="usersnames">{comment.user_name}</h2>
                    <div className="userscomments">{comment.comment}</div>
                </>
            )
        })

        //_______________________________Return___________________________________
        if (!this.state.commentAdded) {
            return (
                <>
                    <Navigation />
                    <div className="contact">
                        <h1>Contacter l'auteur</h1>

                        <div className="links">
                            <div className="link">
                                <a href="https://www.linkedin.com/in/mayerarthur/">
                                    <img src={linkedin}></img>
                                </a>
                            </div>

                            <div className="link">
                                <a href="mailto:arthmayer@outlook.fr">
                                    <img src={mail}></img>
                                </a>
                            </div>

                        </div>

                        <div>
                            <h1>Commentaires & Suggestions</h1>
                            <div className="infocom">Tout commentaire inapproprié sera supprimé</div>
                        </div>

                        <div className="mycomment">
                            <div className="comments">
                                {this.state.error}
                                <h2>{this.state.name}</h2>
                                <input type="text" onChange={(event) => {
                                    this.setState({ comment: event.target.value })
                                }} />
                                <button onClick={addComment}>Envoyer</button>
                            </div>

                            <div className="allcomments">
                                {comments}
                            </div>
                        </div>


                    </div>
                </>
            )
        } else {
            return this.state.commentAdded
        }
    }
}

export default Contact;