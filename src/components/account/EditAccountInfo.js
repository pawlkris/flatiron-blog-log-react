import React from "react";
import { connect } from "react-redux";
import { Button, Form, Message } from "semantic-ui-react";
import { editUser } from "../../actions";
import helper from "../../services/helper";

class EditAccountInfo extends React.Component {
  state = {
    cohort_id: this.props.user.cohort_id,
    email: this.props.user.email === null ? "" : this.props.user.email,
    github: this.props.user.github === null ? "" : this.props.user.github,
    id: this.props.user.id,
    password: "",
    passwordConfirm: "",
    emailValid: true,
    passwordMatch: true
  };

  handleSubmit = () => {
    if (this.state.passwordMatch) {
      if (this.state.email === "" || helper.validateEmail(this.state.email)) {
        this.setState({ emailValid: true });
        this.props.editUser(this.props.user.id, this.state, this.props.history);
      } else {
        this.setState({ emailValid: false });
      }
    }
  };

  passwordCheck = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordMatch: false });
    } else {
      this.setState({ passwordMatch: true });
    }
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value }, this.passwordCheck);
  };

  handleDropdownChange = (key, data) => {
    this.setState({ [key]: data.value });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      cohort_id: nextProps.user.cohort_id,
      email: nextProps.user.email,
      github: nextProps.user.github,
      user_id: nextProps.user.id,
      password: "",
      passwordConfirm: ""
    });
  }

  render() {
    let cohortOptions = helper.cohortsObjForDropdown(this.props.cohorts);
    return (
      <div className="edit-account-info ui container">
        <h2>Edit Account Info</h2>
        <Form
          error
          success
          align="left"
          style={{ margin: " 2% 20%" }}
          onSubmit={this.handleSubmit}
        >
          <Form.Select
            label="Cohort:"
            value={this.state.cohort_id}
            onChange={(event, data) =>
              this.handleDropdownChange("cohort_id", data)
            }
            options={cohortOptions}
          />
          <Form.Input
            label="Email:"
            type="text"
            value={this.state.email}
            onChange={event => this.handleChange(event, "email")}
          />
          {!this.state.emailValid ? (
            <Message
              error
              header="Invalid Email"
              content="Please enter a valid email address or remove email address"
            />
          ) : (
            ""
          )}
          <Form.Input
            label="Github Username:"
            type="text"
            value={this.state.github}
            onChange={event => this.handleChange(event, "github")}
          />
          <Form.Input
            label="Change Password:"
            type="password"
            value={this.state.password}
            onChange={event => this.handleChange(event, "password")}
          />
          <Form.Input
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
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let user = state.users.find(user => user.id === state.auth.currentUser.id);
  return { user, cohorts: state.cohorts };
};
export default connect(mapStateToProps, { editUser })(EditAccountInfo);
