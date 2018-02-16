import React from "react";
import helper from "../../services/helper";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const AuthoredPost = props => {
  let medium_url = `https://medium.com/@${props.medium_username}/${props.slug}`;
  let fanNames =
    props.fans.length > 0
      ? props.fans.map((fan, index) => (
          <Link to={`/cohorts/users/${fan.id}`} key={index}>
            {fan.name}{" "}
          </Link>
        ))
      : "none";
  return (
    <Card centered>
      <Card.Content>
        <h3>
          <Link to={`/posts/${props.id}`}>{props.title}</Link>
        </h3>
        <p>
          <strong>Date Posted:</strong> {helper.formatDate(props.date)}
        </p>
        <p>
          <strong>Fans:</strong> {fanNames}
        </p>
        <a href={medium_url} target="_blank">
          <Icon name="medium" /> View on Medium
        </a>
      </Card.Content>
    </Card>
  );
};

export default AuthoredPost;
