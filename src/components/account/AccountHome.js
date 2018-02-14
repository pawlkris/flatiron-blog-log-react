import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Segment, Header, Icon } from "semantic-ui-react";
import CohortPostList from "./CohortPostList";

const AccountHome = props => {
  let medium_url = `https://medium.com/@${props.user.medium_username}`;
  let github_url = `https://github.com/${props.user.github}`;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={7}>
          <img
            src={`https://cdn-images-1.medium.com/fit/c/200/200/${
              props.user.image_slug
            }`}
            alt="user"
          />
          <p>
            <strong>Name:</strong> {props.user.name}
          </p>
          <p>
            Cohort:{" "}
            <Link to={`/cohorts/${props.userCohort.id}`}>
              {" "}
              {props.userCohort.name}
            </Link>
          </p>
          <p>
            <Icon name="medium" />
            {props.user.medium_username ? (
              <a href={medium_url}>{props.user.medium_username}</a>
            ) : (
              "none"
            )}
            {"   "}

            <Icon name="github" />
            {props.user.github ? (
              <a href={github_url}>{props.user.github}</a>
            ) : (
              "none"
            )}
          </p>
          <p>
            <strong>Email:</strong> {props.user.email}
          </p>

          <p>
            <strong>Your Posts:</strong> {props.user.authored_posts.length}
            {"     "}
            <strong>Saved Posts:</strong> {props.user.fan_posts.length}
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <Header>Recent Cohort Posts</Header>
            <CohortPostList cohort={props.userCohort} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => {
  let user = state.users.find(user => user.id === state.auth.currentUser.id);
  let userCohort = state.cohorts.find(cohort => cohort.id === user.cohort_id);
  return { user, userCohort };
};

export default connect(mapStateToProps, null)(AccountHome);
