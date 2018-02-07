import React from "react";
import UserCard from "./UserCard";

const CohortShow = props => {
  let users = [];
  if (props.cohort.users.length > 0) {
    users = props.cohort.users.map(user => <UserCard user={user} />);
  }
  console.log("cohort users", props.cohort.users);
  console.log("this is users", users);
  return (
    <div className="cohort-show">
      <h2>Name of Cohort</h2>
      <p>list of students</p>
      {users}
    </div>
  );
};

export default CohortShow;
