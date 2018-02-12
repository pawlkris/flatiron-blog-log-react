import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CohortList from "./CohortList";
import CohortShow from "./CohortShow";
import UserShow from "./UserShow";

const CohortsContainer = props => {
  return (
    <div className="cohort-container">
      <Switch>
        <Route
          path="/cohorts/users/:id"
          render={({ match }) => {
            let user = props.users.find(
              user => user.id === parseInt(match.params.id, 10)
            );
            return <UserShow user={user} />;
          }}
        />
        <Route
          path="/cohorts/:id"
          render={({ match }) => {
            let cohort = props.cohorts.find(
              cohort => cohort.id === parseInt(match.params.id, 10)
            );
            return <CohortShow cohort={cohort} />;
          }}
        />
        <Route
          path="/cohorts"
          render={() => {
            return (
              <div className="all-cohorts">
                <CohortList cohorts={props.cohorts} />
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cohorts: state.cohorts,
    users: state.users
  };
};

export default connect(mapStateToProps, null)(CohortsContainer);
