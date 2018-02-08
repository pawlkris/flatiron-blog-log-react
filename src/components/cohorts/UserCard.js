import React from "react";
import { Link } from "react-router-dom";

const UserCard = props => {
  console.log(props);
  return (
    <div className="user-card">
      <img
        src={`https://cdn-images-1.medium.com/fit/c/200/200/${
          props.image_slug
        }`}
      />
      <Link to={`/cohorts/users/${props.id}`}>
        <p>{props.name}</p>
      </Link>
    </div>
  );
};

export default UserCard;
