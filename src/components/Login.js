import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser(username, password, this.props.history);
  };

  componentDidMount() {
    console.log("mounting login");
  }

  render() {
    return (
      <div className="login">
        <Segment style={{ margin: " 2% 20%" }}>
          <Form onSubmit={this.handleSubmit} error>
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
  loginError: state.loginError
});

export default connect(mapStateToProps, { loginUser })(Login);
