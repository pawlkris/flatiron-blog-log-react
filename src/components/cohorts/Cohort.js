import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const Cohort = props => {
  return (
    <Card centered>
      <Card.Content>
        <Link to={`/cohorts/${props.cohort.id}`}>
          <h3>{props.cohort.name}</h3>
        </Link>
      </Card.Content>
      <Card.Meta>{props.cohort.users.length} Users</Card.Meta>
    </Card>
  );
};

export default Cohort;
