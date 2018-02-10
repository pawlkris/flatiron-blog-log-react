import React from "react";
import { connect } from "react-redux";
import { Container, Button, Form, Segment, Message } from "semantic-ui-react";
import { editUser } from "../../actions";
import helper from "../../services/helper";

class EditAccountInfo extends React.Component {
  state = {
    cohort_id: this.props.cohort_id,
    email: this.props.email,
    github: this.props.github,
    id: this.props.userId,
    password: "",
    emailValid: true
  };

  handleSubmit = () => {
    if (this.state.email === "" || helper.validateEmail(this.state.email)) {
      this.setState({ emailValid: true });
      this.props.editUser(this.props.userId, this.state);
    } else {
      this.setState({ emailValid: false });
    }
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleDropdownChange = (key, data) => {
    this.setState({ [key]: data.value });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      cohort_id: nextProps.cohort_id,
      email: nextProps.email,
      github: nextProps.github,
      user_id: nextProps.user_id,
      password: ""
    });
  }

  render() {
    console.log(this.state.email !== "");
    let cohortOptions = this.props.cohorts.map((cohort, index) => ({
      key: index,
      text: cohort.name,
      value: cohort.id
    }));
    cohortOptions.unshift({ key: "", text: "", value: "" });
    console.log("this is state", this.state);
    return (
      <div className="edit-account-info">
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
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let name = "";
  let medium = "";
  let github = "";
  let email = "";
  let cohort_id = "";
  let image = "";
  let currUserData = state.users.filter(
    user => user.id === state.auth.currentUser.id
  );
  if (currUserData.length > 0) {
    name = currUserData[0].name;
    medium = currUserData[0].medium_username;
    github = currUserData[0].github;
    email = currUserData[0].email;
    cohort_id = currUserData[0].cohort_id;
    image = currUserData[0].image_slug;
  }
  let obj = {
    name: name,
    medium: medium,
    github,
    email,
    cohort_id,
    image,
    cohorts: state.cohorts,
    userId: state.auth.currentUser.id
  };
  console.log("mapStateToProps", obj);
  return obj;
};
export default connect(mapStateToProps, { editUser })(EditAccountInfo);
