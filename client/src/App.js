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
import Games from './pages/Games';
import FlappyHolbie from './pages/FlappyHolbie';
import Snake from './pages/Snake';
import WhackAMalou from './pages/WhackAMalou';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Logout" exact component={Logout} />
          <ProtectedRoute path="/Home" component={Home} />
          <ProtectedRoute path="/Records" component={Records} />
          <ProtectedRoute path="/Games" component={Games} />
          <ProtectedRoute path="/Flappy" component={FlappyHolbie} />
          <ProtectedRoute path="/Snake" component={Snake} />
          <ProtectedRoute path="/WhackAMalou" component={WhackAMalou} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;