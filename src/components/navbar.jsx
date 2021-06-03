import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

function Navbar() {
  const authcontext = useContext(AuthContext);
  const { logoutuser, isAuthenticated, user } = authcontext;

  const onlogout = () => {
    logoutuser();
  };

  const authlinksmenu = (
    <Fragment>
      <Link className="nav-link" to="#">
        Hello {user && user.name}
      </Link>
      <Link onClick={onlogout} className="nav-link" to="#">
        <i class="bi bi-box-arrow-left"></i> Logout
      </Link>
    </Fragment>
  );

  const guestlinksmenu = (
    <Fragment>
      <Link className="nav-link" to="/login">
        <i class="bi bi-box-arrow-in-right"></i> Login
      </Link>
      <Link className="nav-link" to="/register">
        <i class="bi bi-person-check-fill"></i> Register
      </Link>
    </Fragment>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-record-circle"></i> Circle
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
              {isAuthenticated ? authlinksmenu : guestlinksmenu}

              <Fragment>
                <Link className="nav-link" to="#">
                  |
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Fragment>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
