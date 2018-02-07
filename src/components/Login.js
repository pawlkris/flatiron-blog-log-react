import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: false
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser(username, password, this.props.history);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Medium Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={event => this.handleChange(event, "username")}
            />
          </div>
          <div className="field">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
          </div>
          <button className="ui button">Submit</button>
        </form>
        <br />
        <Link to="/signup">
          <button className="ui teal basic button">No Account? Sign up!</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);
