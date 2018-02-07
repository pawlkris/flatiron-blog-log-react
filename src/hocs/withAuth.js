import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setCurrentUser } from "../actions/auth";

export const withAuth = WrappedComponent => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    };

    componentDidMount() {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== "undefined"
      ) {
        this.props.setCurrentUser();
      } else {
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser.id
  });

  return connect(mapStateToProps, { setCurrentUser })(AuthedComponent);
};
