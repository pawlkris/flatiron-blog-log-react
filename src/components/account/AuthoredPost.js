import React from "react";
import helper from "../../services/helper";

const AuthoredPost = props => {
  let medium_url = `https://medium.com/@${props.medium_username}/${props.slug}`;
  let fanNames =
    props.fans.length > 0
      ? props.fans.map(fan => fan.name).join(" - ")
      : "none";
  return (
    <div className="authored-post">
      <h3>{props.title}</h3>
      <p>Date Posted: {helper.formatDate(props.date)}</p>
      <p>Fans: {fanNames}</p>
      <a href={medium_url}>View on Medium</a>
    </div>
  );
};

export default AuthoredPost;
