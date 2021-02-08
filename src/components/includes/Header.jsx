import React from "react";
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Sign In</NavLink>
          </li>
          <li>
            <NavLink exact to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/posts/123">Post 123</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
