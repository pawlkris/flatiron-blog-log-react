import React from "react";
import { Link } from "react-router-dom";

const UserPost = props => {
  return (
    <div className="user-post">
      <Link to={`/posts/${props.id}`}>
        <p>{props.title}</p>
      </Link>
    </div>
  );
};

export default UserPost;
