import React from "react";
import UserCard from "./UserCard";
import { Card } from "semantic-ui-react";

const CohortShow = props => {
  let users = [];
  if (props.cohort.users.length > 0) {
    users = props.cohort.users.map((user, index) => (
      <UserCard {...user} key={index} />
    ));
  }
  return (
    <div className="cohort-show">
      <h2>{props.cohort.name} Students</h2>
      <Card.Group>{users}</Card.Group>
    </div>
  );
};

export default CohortShow;
