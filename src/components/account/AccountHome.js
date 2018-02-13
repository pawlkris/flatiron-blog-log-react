import React from "react";
import { connect } from "react-redux";

const AccountHome = props => {
  return (
    <div className="account-home ui container">
      <img
        src={`https://cdn-images-1.medium.com/fit/c/200/200/${
          props.user.image_slug
        }`}
        alt="user"
      />
      <p>
        <strong>Medium Username:</strong> {props.user.medium_username}
      </p>
      <p>
        <strong>Name:</strong> {props.user.name}
      </p>
      <p>
        <strong>Email:</strong> {props.user.email}
      </p>
      <p>
        <strong>Github:</strong> {props.user.github}
      </p>
      <p>
        <strong>Posts:</strong> {props.user.authored_posts.length}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  let user = state.users.find(user => user.id === state.auth.currentUser.id);
  return { user };
};

export default connect(mapStateToProps, null)(AccountHome);
