import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/Signup';
import Records from './pages/Records';
import Profile from './pages/Profile';
import Games from './pages/Games';
import Admin from './pages/Admin';
import FlappyHolbie from './pages/FlappyHolbie';
import Snake from './pages/Snake';

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/Home" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Records" component={Records} />
            <Route path="/Games" component={Games} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Flappy" component={FlappyHolbie} />
            <Route path="/Snake" component={Snake} />
          </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;