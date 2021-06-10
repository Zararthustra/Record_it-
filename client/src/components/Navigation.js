import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const Navigation = () => {
  return (
    <div className="menu">
      <ul className="Navigation">
        <li>
          <NavLink exact to="/" activeClassName="navActive">
            <span id="login">Login</span>
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/SignUp" activeClassName="navActive">
            <span id="signup">SignUp</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;