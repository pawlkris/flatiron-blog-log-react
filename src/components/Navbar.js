import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
  return (
    <Menu inverted color="blue">
      <Menu.Item header>
        <h1>Flatiron Blog Log</h1>
      </Menu.Item>
      {loggedIn ? (
        <div className="right menu">
          <Menu.Item position="right">
            <Link to="/dashboard">
              <Icon name="bar chart" />
              Blog Stats
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/cohorts">
              <Icon name="find" />
              Browse Cohorts
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Icon name="search" />

            <Link to="/posts">Search Posts</Link>
          </Menu.Item>
          <Dropdown
            item
            text={`Hello, ${props.currentUser.username}`}
            position="right"
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/account" style={{ color: "rgb(30,122,202)" }}>
                  Account Home
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/account/library"
                  style={{ color: "rgb(30,122,202)" }}
                >
                  Saved Posts
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/account/your-posts"
                  style={{ color: "rgb(30,122,202)" }}
                >
                  Your Posts
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/account/edit" style={{ color: "rgb(30,122,202)" }}>
                  Edit Account Info
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/login"
                  onClick={props.logoutUser}
                  style={{ color: "rgb(30,122,202)" }}
                >
                  <Icon name="sign out" />Logout
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <div className="right menu">
          <Menu.Item position="right">
            <Link to="/dashboard">
              <i className="bar chart icon" />
              Blog Stats
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/cohorts">Browse Cohorts</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/posts">Search Posts</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/login">Log In</Link>
          </Menu.Item>
        </div>
      )}
    </Menu>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
