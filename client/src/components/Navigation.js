import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="menu">
      <ul className="Navigation">
        <li id="login">
            <NavLink exact to="/" activeClassName="navActive">
              <span>Login</span>
            </NavLink>
        </li>

        <li id="signup">
          <NavLink exact to="/SignUp" activeClassName="navActive">
            <span>SignUp</span>
          </NavLink>
        </li>
        <li id="home">
          <NavLink exact to="/Home" activeClassName="navActive">
            <span>Home</span>
          </NavLink>
        </li>
        <li id="games">
          <NavLink exact to="/Games" activeClassName="navActive">
            <span>Games</span>
          </NavLink>
        </li>
        <li id="records">
          <NavLink exact to="/Records" activeClassName="navActive">
            <span>Records</span>
          </NavLink>
        </li>
        <li id="profile">
          <NavLink exact to="/Profile" activeClassName="navActive">
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;