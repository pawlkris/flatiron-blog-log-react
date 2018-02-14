import React from "react";
import UserPost from "./UserPost.js";
import { List } from "semantic-ui-react";

const UserPostList = props => {
  let userPosts = [];
  if (props.posts.length > 0) {
    userPosts = props.posts.map((post, index) => (
      <UserPost post={post} key={index} />
    ));
  }
  return <List>{userPosts}</List>;
};

export default UserPostList;
