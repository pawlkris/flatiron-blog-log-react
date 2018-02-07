import React from "react";
import { connect } from "react-redux";
import AuthoredPost from "./AuthoredPost";

const AuthoredPostsList = props => {
  const authored = props.authoredPosts.map((post, index) => (
    <AuthoredPost {...post} mediumUsername={props.mediumUsername} key={index} />
  ));
  return (
    <div className="authored-posts-list">
      <h2>Your Posts</h2>
      {authored}
    </div>
  );
};

const mapStateToProps = state => {
  let posts = [];
  let medium = "";
  let currUserData = state.users.filter(
    user => user.id === state.auth.currentUser.id
  );
  if (currUserData.length > 0) {
    posts = currUserData[0].authored_posts;
    medium = currUserData[0].medium_username;
  }
  return {
    authoredPosts: posts,
    mediumUsername: medium
  };
};

export default connect(mapStateToProps, null)(AuthoredPostsList);
