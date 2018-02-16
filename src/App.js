import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/auth";
import { fetchData } from "./actions";
import { Loader, Container, Segment } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Splash from "./components/Splash";
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
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Segment style={{ margin: " 2% 1%", minHeight: 500 }}>
            {!this.props.asyncLoading &&
            (this.props.cohorts.length && this.props.users.length) ? (
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
                  render={routerProps => (
                    <DashboardContainer {...routerProps} />
                  )}
                />
                <Route path="/" component={Splash} />
              </Switch>
            ) : (
              <div style={{ minHeight: 500 }}>
                <h2>Loading...</h2>
                <Loader active />
              </div>
            )}
          </Segment>
        </Container>
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
