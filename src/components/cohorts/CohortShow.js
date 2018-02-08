import React from "react";
import UserCard from "./UserCard";

const CohortShow = props => {
  let users = [];
  if (props.cohort.users.length > 0) {
    users = props.cohort.users.map(user => <UserCard {...user} />);
  }
  return (
    <div className="cohort-show">
      <h2>{props.cohort.name}</h2>
      <p>list of students</p>
      {users}
    </div>
  );
};

export default CohortShow;
