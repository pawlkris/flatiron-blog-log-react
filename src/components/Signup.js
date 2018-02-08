import React, { Component } from "react";
import { Container, Button, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { newUser } from "../actions";

class Signup extends Component {
  state = {
    medium_username: "",
    cohort_id: "",
    password: "",
    email: "",
    github: "",
    errors: false
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleSubmit = (event, user, history) => {
    this.props.newUser(user, history);
  };

  handleDropdownChange = (event, key, data) => {
    this.setState({ [key]: data.value });
  };

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
            style={{ margin: " 2% 20%" }}
            onSubmit={event =>
              this.handleSubmit(event, this.state, this.props.history)
            }
          >
            <Form.Input
              label="Medium Username:"
              type="text"
              value={this.state.medium_username}
              onChange={event => this.handleChange(event, "medium_username")}
            />
            <Form.Input
              label="Password:"
              type="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
            <Form.Select
              label="Cohort:"
              value={this.state.cohort}
              onChange={(event, data) =>
                this.handleDropdownChange(event, "cohort_id", data)
              }
              options={cohortOptions}
            />
            <Form.Input
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

const mapStateToProps = state => ({ cohorts: state.cohorts });

export default connect(mapStateToProps, { newUser })(Signup);
