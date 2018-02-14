import React, { Component } from "react";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { newUser, removeSignupError } from "../actions";

class Signup extends Component {
  state = {
    medium_username: "",
    cohort_id: "",
    password: "",
    passwordConfirm: "",
    passwordMatch: true,
    email: "",
    github: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value }, this.passwordCheck);
  };

  passwordCheck = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordMatch: false });
    } else {
      this.setState({ passwordMatch: true });
    }
  };

  handleSubmit = (event, user, history) => {
    if (this.state.passwordMatch) {
      console.log("entered");
      this.props.newUser(user, history);
    }
  };

  handleDropdownChange = (event, key, data) => {
    this.setState({ [key]: data.value });
  };

  componentWillUnmount() {
    this.props.removeSignupError();
  }

  render() {
    let cohortOptions = this.props.cohorts.map((cohort, index) => ({
      key: index,
      text: cohort.name,
      value: cohort.id
    }));
    cohortOptions.unshift({ key: "", text: "", value: "" });
    return (
      <div className="signup">
        <Segment style={{ margin: " 2% 20%" }}>
          <h2>Create an Account with your Medium Account</h2>
          <Form
            align="left"
            error
            style={{ margin: " 2% 20%" }}
            onSubmit={event =>
              this.handleSubmit(event, this.state, this.props.history)
            }
          >
            <Form.Input
              error={!!this.props.signupError.message.medium_username}
              label="Medium Username:"
              type="text"
              value={this.state.medium_username}
              onChange={event => this.handleChange(event, "medium_username")}
            />
            <Form.Input
              error={
                !this.state.passwordMatch ||
                !!this.props.signupError.message.password
              }
              label="Password:"
              type="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
            <Form.Input
              error={
                !this.state.passwordMatch ||
                !!this.props.signupError.message.password
              }
              label="Confirm Password:"
              type="password"
              value={this.state.passwordConfirm}
              onChange={event => this.handleChange(event, "passwordConfirm")}
            />
            {!this.state.passwordMatch ? (
              <Message
                error
                header="Passwords do not match"
                content="Please re-enter Password and Password Confirmation"
              />
            ) : (
              ""
            )}
            <Form.Select
              error={!!this.props.signupError.message.cohort_id}
              label="Cohort:"
              value={this.state.cohort}
              onChange={(event, data) =>
                this.handleDropdownChange(event, "cohort_id", data)
              }
              options={cohortOptions}
            />
            <Form.Input
              error={
                !!this.state.email && !!this.props.signupError.message.email
              }
              label="Email:"
              type="text"
              value={this.state.email}
              onChange={event => this.handleChange(event, "email")}
            />
            <Form.Input
              label="Github Username:"
              type="text"
              value={this.state.github}
              onChange={event => this.handleChange(event, "github")}
            />
            <Button>Submit</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signupError: state.signupError,
  cohorts: state.cohorts
});

export default connect(mapStateToProps, { newUser, removeSignupError })(Signup);
