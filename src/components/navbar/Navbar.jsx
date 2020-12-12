import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user-action";

const Navbar = ({ currentUser, setCurrentUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Rizal Invoice Generate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* TODO: add active class to nav-links */}
          <ul className="navbar-nav">
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home(App Introduction)
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link active" to="/dashbord">
                  Dashboard
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <button
                  onClick={() => {
                    auth.signOut();
                    setCurrentUser(null);
                  }}
                  className="btn p-0 ml-0"
                >
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
