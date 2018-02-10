import React from "react";
import UserPost from "./UserPost.js";

const UserPostList = props => {
  console.log("userPostList props", props);
  let userPosts = [];
  if (props.posts.length > 0) {
    userPosts = props.posts.map((post, index) => (
      <UserPost {...post} key={index} />
    ));
  }
  return <div className="user-post-list">{userPosts}</div>;
};

export default UserPostList;
