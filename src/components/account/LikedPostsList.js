import React from "react";
import { connect } from "react-redux";
import LikedPost from "./LikedPost";
import { Card } from "semantic-ui-react";

const LikedPostsList = props => {
  const liked = props.likedPosts.map((post, index) => (
    <LikedPost {...post} userId={props.userId} key={index} />
  ));
  return (
    <div className="liked-posts-list ui container">
      <h2>Your Library</h2>
      <Card.Group>{liked}</Card.Group>
    </div>
  );
};

const mapStateToProps = state => {
  let posts = [];
  if (
    state.users.filter(user => user.id === state.auth.currentUser.id).length > 0
  ) {
    posts = state.users.filter(user => user.id === state.auth.currentUser.id)[0]
      .fan_posts;
  }
  return { likedPosts: posts, userId: state.auth.currentUser.id };
};

export default connect(mapStateToProps, null)(LikedPostsList);
