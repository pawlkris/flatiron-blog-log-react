import React from "react";
import { connect } from "react-redux";

const AccountHome = props => {
  console.log(props);
  return !!props.user ? (
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
  ) : (
    <div>
      <h1>Loading... </h1>
    </div>
  );
};

const mapStateToProps = state => {
  let user;
  if (state.users.length > 0) {
    user = state.users.find(user => user.id === state.auth.currentUser.id);
    // let clapArr = user.authored_posts.map(post => post.claps);
    // clapCount = clapArr.reduce((acc, curr) => acc + parseInt(curr.claps, 10));
  }
  return { user };
};

export default connect(mapStateToProps, null)(AccountHome);
