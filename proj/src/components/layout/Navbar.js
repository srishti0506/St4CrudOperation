import React from "react";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import hel from '../../logo-light.png';
const Navbar = () => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg  nav-fix-pause fixed-up  abc">
      <div className="container">
        <Link className="navbar-brand" href="/">
        <NavLink className="nav-link" exact to="/">
        <img src={hel} alt='hello' width="40" height="40" />
              </NavLink>
       
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse h6">
          <ul className="navbar-nav mr-auto nav-fill w-75">
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/">
               Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/Signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-size" exact to="/Register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-dark button-weight" to="/users/addUser">Add User</Link>
      </div>
    </nav>
    <div className="header-block">
          
    </div>
  </div>
  );
};

export default Navbar;