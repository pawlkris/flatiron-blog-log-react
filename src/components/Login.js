import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, removeLoginError } from "../actions/auth";
import { removeNewUserMessage } from "../actions";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    this.props.loginUser(username, password, this.props.history);
  };

  componentWillUnmount() {
    this.props.removeLoginError();
    this.props.removeNewUserMessage();
  }

  render() {
    return (
      <div className="login">
        <Segment style={{ margin: " 2% 20%" }}>
          <Form onSubmit={this.handleSubmit} error success>
            <Form.Input
              label="Medium Username:"
              type="text"
              value={this.state.username}
              onChange={event => this.handleChange(event, "username")}
            />
            <Form.Input
              label="Password:"
              type="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
            {!!this.props.loginError.status ? (
              <Message
                error
                header="Login Error"
                content={this.props.loginError.message}
              />
            ) : (
              ""
            )}
            {!!this.props.newSignup ? (
              <Message
                success
                header="Account Created"
                content="Please enter your credentials to log in."
              />
            ) : (
              ""
            )}
            <Button>Submit</Button>
          </Form>
          <br />
          <Link to="/signup">
            <Button>No Account? Sign up!</Button>
          </Link>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.loginError,
  newSignup: state.newSignup
});

export default connect(mapStateToProps, {
  loginUser,
  removeLoginError,
  removeNewUserMessage
})(Login);
