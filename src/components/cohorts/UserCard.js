import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";

const UserCard = props => {
  console.log(props);
  return (
    <Card centered>
      <Card.Content>
        <Image
          src={`https://cdn-images-1.medium.com/fit/c/200/200/${
            props.image_slug
          }`}
          size="tiny"
        />
      </Card.Content>
      {
        <Link to={`/cohorts/users/${props.id}`}>
          <Button primary attached="bottom">
            {props.name}
          </Button>
        </Link>
      }
    </Card>
  );
};

export default UserCard;
