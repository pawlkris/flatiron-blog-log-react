import React, { Component } from "react";
import { connect } from "react-redux";
import { newUser } from "../actions";

class Signup extends Component {
  state = {
    medium_username: "",
    cohort_id: "",
    password: "",
    email: "",
    github: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = (event, user, history) => {
    event.preventDefault();
    this.props.newUser(user, history);
  };

  render() {
    let cohortOptions = this.props.cohorts.map((cohort, index) => (
      <option key={index} value={cohort.id}>
        {cohort.name}
      </option>
    ));
    return (
      <div className="signup">
        <h2>Create an account with your Medium Account</h2>
        <form
          className="ui form"
          onSubmit={event =>
            this.handleSubmit(event, this.state, this.props.history)
          }
        >
          <div className="field">
            <label>Medium Username:</label>
            <input
              type="text"
              value={this.state.medium_username}
              onChange={event => this.handleChange(event, "medium_username")}
            />
          </div>
          <div className="field">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
            <div className="field">
              <label>Cohort</label>
              <select
                className="ui fluid dropdown"
                value={this.state.cohort_id}
                onChange={event => this.handleChange(event, "cohort_id")}
              >
                <option value="">Cohort</option>
                {cohortOptions}
              </select>
            </div>
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
            <label>Github Username:</label>
            <input
              type="text"
              value={this.state.github}
              onChange={event => this.handleChange(event, "github")}
            />
          </div>
          <button className="ui button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ cohorts: state.cohorts });

export default connect(mapStateToProps, { newUser })(Signup);
