import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import $ from 'jquery';


const Home = () => {

  //______________________________Variables__________________________________

  const username = localStorage.getItem("username")
  let history = useHistory();

  //______________________________Functions__________________________________

  const goProfile = () => {
    history.push('/Profile')
  }
  const goRecords = () => {
    history.push('/Records')
  }
  const goGames = () => {
    history.push('/Games')
  }

  //replace a letter to change its color
  $(document).ready(function () {
    console.log("ready!");
    const text = $("#phrase").html().replace(/i/, " <h1 class='letter'> !</h1>");
    $("#phrase").html(text)
  });
  //_______________________________Return___________________________________

  return (
    <body>
      <Navigation />
      <div className="Home">
        <h1 id="phrase">RECORD  i T</h1>
        <h2>{username}</h2>

        <div className="global">
          <div className="myglobalscore">
            <header><h2>My global score</h2></header>
            <table>
              <thead>
                <tr>
                  <th>Top1 (10pts)</th>
                  <th>Top2 (7pts)</th>
                  <th>Top3 (5pts)</th>
                  <th>Global</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    0
                  </td>
                  <td>
                    1
                  </td>
                  <td>
                    4
                  </td>
                  <td>
                    27 pts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="globalscore">
            <header><h2>Top global score</h2></header>
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
                    Samy45
                  </td>
                  <td>
                    56 pts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;