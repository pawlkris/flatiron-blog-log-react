import React from "react";
import Cohort from "./Cohort";

const CohortList = props => {
  let cohorts = [];
  if (props.cohorts.length > 0) {
    cohorts = props.cohorts.map((cohort, index) => (
      <Cohort cohort={cohort} key={index} />
    ));
  }
  return (
    <div>
      <h2>All Cohorts</h2>
      {cohorts}
    </div>
  );
};

export default CohortList;
