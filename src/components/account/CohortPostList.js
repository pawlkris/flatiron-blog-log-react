import React from "react";
import { Card } from "semantic-ui-react";
import CohortPostCard from "./CohortPostCard";

const CohortPostList = props => {
  let users = props.cohort.users;
  let posts = users
    .reduce((acc, curr) => acc.concat(curr.authored_posts), [])
    .sort((a, b) => b.date - a.date)
    .slice(0, 10);
  let cards = posts.map(post => <CohortPostCard post={post} />);
  return <Card.Group>{cards} </Card.Group>;
};

export default CohortPostList;
