import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";
import ContactContext from "../context/contact/ContactContext";

function Navbar() {
  const authcontext = useContext(AuthContext);
  const contactcontext = useContext(ContactContext);
  const { logoutuser, isAuthenticated, user } = contactcontext;
  const { clearcontacts } = authcontext;

  const onlogout = () => {
    logoutuser();
    clearcontacts();
  };

  const authlinksmenu = (
    <Fragment>
      <Link className="nav-link" to="#">
        Hello {user && user.name}
      </Link>
      <Link onClick={onlogout} className="nav-link" to="#">
        <i className="bi bi-box-arrow-left"></i> Logout
      </Link>
    </Fragment>
  );

  const guestlinksmenu = (
    <Fragment>
      <Link className="nav-link" to="/login">
        <i className="bi bi-box-arrow-in-right"></i> Login
      </Link>
      <Link className="nav-link" to="/register">
        <i className="bi bi-person-check-fill"></i> Register
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
