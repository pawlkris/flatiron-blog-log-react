import React from "react";
import UserPostList from "./UserPostList";

const UserShow = props => {
  let medium_url = `https://medium.com/@${props.user.medium_username}`;
  let github_url = `https://github.com/${props.user.github}`;
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>
        Medium username: <a href={medium_url}>{props.user.medium_username}</a>
      </p>
      <p>
        Github username: <a href={github_url}>{props.user.github}</a>
      </p>
      <img
        src={`https://cdn-images-1.medium.com/fit/c/200/200/${
          props.user.image_slug
        }`}
        alt="user"
      />
      <h3>{`${props.user.name.split(" ")[0]}'s Posts`}</h3>
      <UserPostList posts={props.user.authored_posts} />
    </div>
  );
};

export default UserShow;
