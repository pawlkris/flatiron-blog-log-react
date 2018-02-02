import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CohortContainer from "./components/CohortContainer";
import * as actions from "./actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/login"
            render={routerProps => <Login {...routerProps} />}
          />
          <Route
            path="/signup"
            render={routerProps => <Signup {...routerProps} />}
          />
          <Route path="/cohorts" render={() => <CohortContainer />} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, actions)(App);
