import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NEWSIUM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-<Link  active" aria-current="page" to="/">
                Home
              </a>
              <Link className="nav-Link " to="/Business">
                Business
              </Link>

              <Link className="nav-Link " to="/Entertainment">
                Entertainment
              </Link>

              <Link className="nav-Link " to="/General">
                General
              </Link>

              <Link className="nav-Link " to="/Health">
                Health
              </Link>

              <Link className="nav-Link " to="/Science">
                Science
              </Link>

              <Link className="nav-Link " to="/Sports">
                Sports
              </Link>

              <Link className="nav-Link " to="/Technology">
                Technology
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default NavBar;
