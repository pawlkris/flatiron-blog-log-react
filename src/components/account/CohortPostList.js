import React from "react";
import { Card } from "semantic-ui-react";
import CohortPostCard from "./CohortPostCard";

const CohortPostList = props => {
  let users = props.cohort.users;
  let posts = users
    .reduce((acc, curr) => acc.concat(curr.authored_posts), [])
    .sort((a, b) => b.date - a.date)
    .slice(0, 15);
  let cards = posts.map((post, index) => (
    <CohortPostCard key={index} post={post} />
  ));
  return <Card.Group>{cards} </Card.Group>;
};

export default CohortPostList;
