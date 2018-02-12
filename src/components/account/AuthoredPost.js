import React from "react";
import helper from "../../services/helper";
import { Card, Icon } from "semantic-ui-react";

const AuthoredPost = props => {
  let medium_url = `https://medium.com/@${props.medium_username}/${props.slug}`;
  let fanNames =
    props.fans.length > 0
      ? props.fans.map(fan => fan.name).join(" - ")
      : "none";
  return (
    <Card centered>
      <Card.Content>
        <h3>{props.title}</h3>
        <p>Date Posted: {helper.formatDate(props.date)}</p>
        <p>Fans: {fanNames}</p>
        <a href={medium_url}>
          <Icon name="medium" /> View on Medium
        </a>
      </Card.Content>
    </Card>
  );
};

export default AuthoredPost;
