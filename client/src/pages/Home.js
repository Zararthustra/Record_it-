import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import Axios from 'axios';
import $ from 'jquery';


class Home extends Component {

  //______________________________Constructor__________________________________

  constructor(props) {
    super(props);

    this.state = {
      globalPerso: 0,
      globals: [],
      topFlappyRecords: [],
      topSnakeRecords: [],
      flappyRecords: [],
      snakeRecords: [],
      showMe: true,
      username: localStorage.getItem("username"),
      userid: localStorage.getItem("userid"),
      flappy1: "",
      flappy2: "",
      flappy3: "",
      snake1: "",
      snake2: "",
      snake3: ""
    }
  }

  //______________________________Functions__________________________________

  async componentDidMount() {

    //______________________________GET TOPS__________________________________

    const getFlappyTop =
      await Axios.post('/apiroutes/topGameRecords', {
        game_id: 1 //flappy game_id
      })
    //get user's top 1, 2, 3 of flappy
    const top1Flappy = getFlappyTop.data[0]
    const flappy1 = top1Flappy.user_name === this.state.username ? 10 : 0
    this.setState({ flappy1: flappy1 })
    const top2Flappy = getFlappyTop.data[1]
    const flappy2 = top2Flappy.user_name === this.state.username ? 7 : 0
    this.setState({ flappy2: flappy2 })
    const top3Flappy = getFlappyTop.data[2]
    const flappy3 = top3Flappy.user_name === this.state.username ? 5 : 0
    this.setState({ flappy3: flappy3 })

    const getSnakeTop =
      await Axios.post('/apiroutes/topGameRecords', {
        game_id: 2 //snake game_id
      })
    //get user's top 1, 2, 3 of flappy
    const top1Snake = getSnakeTop.data[0]
    const snake1 = top1Snake.user_name === this.state.username ? 10 : 0
    this.setState({ snake1: snake1 })
    const top2Snake = getSnakeTop.data[1]
    const snake2 = top2Snake.user_name === this.state.username ? 7 : 0
    this.setState({ snake2: snake2 })
    const top3Snake = getSnakeTop.data[2]
    const snake3 = top3Snake.user_name === this.state.username ? 5 : 0
    this.setState({ snake3: snake3 })

    //Sum up global score
    const s = this.state
    const globalPerso =
      s.flappy1
      + s.flappy2
      + s.flappy3
      + s.snake1
      + s.snake2
      + s.snake3
    this.setState({ globalPerso: globalPerso })

    //______________________________PUT/GET GLOBAL__________________________________

    const getGlobals =
      await Axios.get('/apiroutes/globals')
    this.setState({ globals: getGlobals.data })
    console.log(this.state.globals, "\n ^= Globals");

    const putGlobal =
      await Axios.put('/apiroutes/putGlobal', {
        global: this.state.globalPerso,
        user_id: this.state.userid,
        user_name: this.state.username
      }).then(res => console.log(res, "puuuuuut"))

  }
  //_______________________________Render___________________________________

  render() {
    //replace a letter ("i" by "!") to change its color
    $(document).ready(function () {
      const text = $("#phrase").html().replace(/i/, " <h1 class='letter'> !</h1>");
      $("#phrase").html(text)
    });
    
    const globals = this.state.globals.map((global) => {
      if (global.user_name === this.state.username) {
        return <div key={global.id} className="myglobalrow">{global.global}</div>
      } else {
        return <div key={global.id} className="globalrow">{global.global}</div>
      }
  })
    const usersGlobals = this.state.globals.map((userGlobal) => {
      if (userGlobal.user_name === this.state.username) {
        return <div key={userGlobal.id} className="myglobalrow">{userGlobal.user_name}</div>
      } else {
        return <div key={userGlobal.id} className="globalrow">{userGlobal.user_name}</div>
      }
    })

    return (
      <>
        <Navigation />
        <div className="Home">
          <h1 id="phrase">RECORD  iT</h1>
          <h2 className="globaltitle">Global Scores</h2>
          <div className="globalinfo">
            <p>Top1 = 10 pts</p>
            <p>Top2 = 7 pts</p>
            <p>Top3 = 5 pts</p>
          </div>
          <div className="global">

            <div className="myglobalscore">
              <header>
                <h2>My global score</h2>
              </header>
              <h1>{this.state.globalPerso ? this.state.globalPerso : 0}</h1>
            </div>

            <div className="globalscore">
              <header><h2>Top global scores</h2></header>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Global</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {usersGlobals}
                    </td>
                    <td>
                      {globals}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;