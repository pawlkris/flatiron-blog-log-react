import React from "react";
import { Link } from "react-router-dom";

const Cohort = props => {
  return (
    <div className="cohort">
      <Link to={`/cohorts/${props.cohort.id}`}>
        <h2>{props.cohort.name}</h2>
      </Link>
    </div>
  );
};

export default Cohort;
