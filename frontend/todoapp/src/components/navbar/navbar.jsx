import React from "react";
import "./navbar.css";
import { FaBook } from "react-icons/fa6";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand" href="#" style={{ color: "crimson" }}>
            <FaBook /> TODO APP
          </NavLink>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-2  ">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="todo">
                  ToDo
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link btn-nav" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link btn-nav"to="/signin">
                  Signin
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link btn-nav" to="/logout">
                  Logout
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link " href="">
                  <img
                    className="img-fluid"
                    id="user"
                    src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
