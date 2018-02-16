import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Segment, Header, Icon, Divider } from "semantic-ui-react";
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
            <strong>Cohort:</strong>{" "}
            <Link to={`/cohorts/${props.userCohort.id}`}>
              {" "}
              {props.userCohort.name}
            </Link>
          </p>
          <p>
            <Icon name="medium" />
            {props.user.medium_username ? (
              <a href={medium_url} target="_blank">
                {props.user.medium_username}
              </a>
            ) : (
              "none"
            )}
            {"   "}

            <Icon name="github" />
            {props.user.github ? (
              <a href={github_url} target="_blank">
                {props.user.github}{" "}
              </a>
            ) : (
              "none"
            )}
          </p>
          <p>
            <Icon name="mail" />
            {props.user.email ? props.user.email : "none"}
          </p>
          <p>
            <strong>Saved Posts:</strong>{" "}
            <Link to="/account/saved-posts">{props.user.fan_posts.length}</Link>
          </p>
          <p>
            <strong>Your Posts:</strong>{" "}
            <Link to="/account/your-posts">
              {props.user.authored_posts.length}
            </Link>
          </p>
          <p>
            <strong>Total Claps:</strong>{" "}
            {props.user.authored_posts
              .map(post => post.claps)
              .reduce((acc, cur) => acc + cur)}
          </p>
        </Grid.Column>
        <Grid.Column width={9}>
          <Segment
            style={{ maxHeight: 480, overflow: "hidden", overflowY: "scroll" }}
          >
            <Header>Recent Cohort Posts</Header>
            <Divider />
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
