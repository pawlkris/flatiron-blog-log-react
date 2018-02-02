import React, { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = (event, user) => {
    event.preventDefault();
    // api.users.newUser(user)
    // .then(this.props.history.push('/login'))
  };

  render() {
    return (
      <div className="signup">
        <h2>Create an account with your Medium Account</h2>
        <form
          className="ui form"
          onSubmit={event => this.handleSubmit(event, this.state)}
        >
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={event => this.handleChange(event, "name")}
            />
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={event => this.handleChange(event, "email")}
            />
          </div>
          <div className="field">
            <label>Username:</label>
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
      </div>
    );
  }
}

export default Signup;
