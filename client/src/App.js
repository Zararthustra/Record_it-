import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
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
import { useState, useEffect } from "react";
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
          <ProtectedRoute path="/Profile" component={Profile} />
          <ProtectedRoute path="/Records" component={Records} />
          <ProtectedRoute path="/Games" component={Games} />
          <ProtectedRoute path="/Admin" component={Admin} />
          <ProtectedRoute path="/Flappy" component={FlappyHolbie} />
          <ProtectedRoute path="/Snake" component={Snake} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;