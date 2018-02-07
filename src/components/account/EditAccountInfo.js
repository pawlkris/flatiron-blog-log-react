import React from "react";
import { connect } from "react-redux";

class EditAccountInfo extends React.Component {
  state = {
    cohort: this.props.cohort,
    email: this.props.email,
    github: this.props.github,
    user_id: this.props.id,
    password: ""
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  render() {
    console.log("props on refresh", this.props, "state on refresh", this.state);
    let cohortOptions = this.props.allCohorts.map((cohort, index) => (
      <option key={index} value={cohort.id}>
        {cohort.name}
      </option>
    ));
    console.log("this is props", this.props);
    console.log("this is this.props.cohort", this.props.cohort);
    console.log("this is state", this.state);
    return (
      <div className="edit-account-info">
        <h2>Account Info</h2>
        <img
          src={`https://cdn-images-1.medium.com/fit/c/200/200/${
            this.props.image
          }`}
        />
        <p>Medium Username: {this.props.medium}</p>
        <p>Name: {this.props.name}</p>
        <form
          style={{ opacity: ".9", margin: " 0 20%" }}
          className="ui form segment"
          onSubmit={event => this.props.updateUser(event, this.state)}
        >
          <div className="field">
            <label>Cohort:</label>
            <select
              className="ui fluid dropdown"
              value={this.state.cohort}
              onChange={event => this.handleChange(event, "cohort")}
            >
              <option value="" />
              {cohortOptions}
            </select>
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
          <div className="field">
            <label>Change Password:</label>
            <input
              type="text"
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

const mapStateToProps = state => {
  let name = "";
  let medium = "";
  let github = "";
  let email = "";
  let cohort = "";
  let image = "";
  let currUserData = state.users.filter(
    user => user.id === state.auth.currentUser.id
  );
  if (currUserData.length > 0) {
    name = currUserData[0].name;
    medium = currUserData[0].medium_username;
    github = currUserData[0].github;
    email = currUserData[0].email;
    cohort = currUserData[0].cohort_id;
    image = currUserData[0].image_slug;
  }
  let obj = {
    name: name,
    medium: medium,
    github,
    email,
    cohort,
    image,
    allCohorts: state.cohorts,
    user_id: state.auth.currentUser.id
  };
  return obj;
};
export default connect(mapStateToProps, null)(EditAccountInfo);
