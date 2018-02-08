import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
  return (
    <div className="ui teal inverted menu">
      <div className="header item">
        <h1>Flatiron Blog Log</h1>
      </div>
      {loggedIn ? (
        <div className="right menu">
          <Link to="/dashboard" className="item">
            <i className="bar chart icon" />
            Blog Stats
          </Link>
          <Link to="/cohorts" className="item">
            Browse Cohorts
          </Link>
          <Link to="/posts" className="item">
            Search Posts
          </Link>
          <Link to="/account" className="item">
            Hello, {props.currentUser.username}
          </Link>
          <Link to="/login" className="item" onClick={props.logoutUser}>
            <i className="sign out icon" />Logout
          </Link>
        </div>
      ) : (
        <div className="right menu">
          <Link to="/cohorts" className="item">
            Browse Cohorts
          </Link>
          <Link to="/posts" className="item">
            <i className="plane icon" /> Search Posts
          </Link>
          <Link to="/login" className="right menu item">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
