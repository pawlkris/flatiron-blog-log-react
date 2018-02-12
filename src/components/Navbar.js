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
          <Menu.Item as={Link} to="/dashboard" position="right">
            <Icon name="bar chart" />
            Blog Stats
          </Menu.Item>
          <Menu.Item as={Link} to="/cohorts" position="right">
            <Icon name="find" />
            Browse Cohorts
          </Menu.Item>
          <Menu.Item as={Link} to="/posts" position="right">
            <Icon name="search" />
            Search Posts
          </Menu.Item>
          <Dropdown
            item
            text={`Hello, ${props.currentUser.username}`}
            position="right"
          >
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/account">
                <div style={{ color: "rgb(30,122,202)" }}> Account Home</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/account/library">
                <div style={{ color: "rgb(30,122,202)" }}>Saved Posts</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/account/your-posts">
                <div style={{ color: "rgb(30,122,202)" }}>Your Posts</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/account/edit">
                <div style={{ color: "rgb(30,122,202)" }}>
                  Edit Account Info
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/account" onClick={props.logoutUser}>
                <div style={{ color: "rgb(30,122,202)" }}>
                  <Icon name="sign out" />Logout
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <div className="right menu">
          <Menu.Item as={Link} to="/dashboard" position="right">
            <Icon name="bar chart" />
            Blog Stats
          </Menu.Item>
          <Menu.Item as={Link} to="/cohorts" position="right">
            <Icon name="find" />
            Browse Cohorts
          </Menu.Item>
          <Menu.Item as={Link} to="/posts" position="right">
            <Icon name="search" />
            Search Posts
          </Menu.Item>
          <Menu.Item as={Link} to="/login" position="right">
            <Icon name="sign in" />
            Login
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
