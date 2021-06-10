import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Records from './pages/Records';
import Profile from './pages/Profile';
import Games from './pages/Games';
import './App.css';


function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Records" component={Records} />
            <Route path="/Games" component={Games} />
          </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;
