import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/auth";
import { fetchData } from "./actions";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountContainer from "./components/account/AccountContainer";
import PostsContainer from "./components/posts/PostsContainer";
import CohortsContainer from "./components/cohorts/CohortsContainer";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined"
    ) {
      this.props.setCurrentUser();
    }
  }
  render() {
    console.log(this.props.asyncLoading);
    return (
      <div className="App">
        <Navbar />
        {!!this.props.asyncLoading ||
        (this.props.cohorts > 1 && this.props.users > 1) ? (
          <div>Loading</div>
        ) : (
          <Switch>
            <Route
              path="/login"
              render={routerProps => <Login {...routerProps} />}
            />
            <Route
              path="/signup"
              render={routerProps => <Signup {...routerProps} />}
            />
            <Route
              path="/posts"
              render={routerProps => <PostsContainer {...routerProps} />}
            />
            <Route
              path="/cohorts"
              render={routerProps => <CohortsContainer {...routerProps} />}
            />
            <Route
              path="/account"
              render={routerProps => <AccountContainer {...routerProps} />}
            />
            <Route
              path="/dashboard"
              render={routerProps => <DashboardContainer {...routerProps} />}
            />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    asyncLoading: state.asyncLoading,
    users: state.users,
    cohorts: state.cohorts
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchData, setCurrentUser })(App)
);
