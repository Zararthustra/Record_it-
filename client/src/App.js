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
<<<<<<< HEAD
import ProtectedRoute from "./components/ProtectedRoute";

=======
>>>>>>> 8ff866088287e986f713556f28ac2ad160f8c627

function App() {
  return (
    <>
<<<<<<< HEAD
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
        </Switch>
      </BrowserRouter>
    </>
  );
=======
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
>>>>>>> 8ff866088287e986f713556f28ac2ad160f8c627
}

export default App;