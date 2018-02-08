import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CohortList from "./CohortList";
import CohortShow from "./CohortShow";
import UserShow from "./UserShow";

const CohortsContainer = props => {
  console.log(props);
  return (
    <div className="cohort-container">
      <Switch>
        <Route
          path="/cohorts/users/:id"
          render={({ match }) => {
            let user = "";
            if (props.users.length > 0) {
              user = props.users.find(
                user => user.id === parseInt(match.params.id, 10)
              );
            }
            return user ? <UserShow user={user} /> : <div>Loading...</div>;
          }}
        />
        <Route
          path="/cohorts/:id"
          render={({ match }) => {
            let cohort = "";
            if (props.cohorts.length > 0) {
              cohort = props.cohorts.find(
                cohort => cohort.id === parseInt(match.params.id, 10)
              );
            }
            return cohort ? (
              <CohortShow cohort={cohort} />
            ) : (
              <div>Loading...</div>
            );
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
  let cohorts = [];
  let users = [];
  if (state.users.length > 0) {
    cohorts = state.cohorts;
    users = state.users;
  }
  return { cohorts, users };
};

export default connect(mapStateToProps, null)(CohortsContainer);
