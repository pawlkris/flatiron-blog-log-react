import React from "react";
import UserPostList from "./UserPostList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Header, Divider, Icon, Segment, Grid } from "semantic-ui-react";

const UserShow = props => {
  let medium_url = `https://medium.com/@${props.user.medium_username}`;
  let github_url = `https://github.com/${props.user.github}`;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image
            src={`https://cdn-images-1.medium.com/fit/c/300/300/${
              props.user.image_slug
            }`}
            alt="user"
            floated="left"
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <h1>{props.user.name}</h1>
          <p>
            Cohort:{" "}
            <Link to={`/cohorts/${props.user.cohort_id}`}>
              {" "}
              {props.cohortName}
            </Link>
          </p>
          <p>
            <Icon name="medium" />
            {props.user.medium_username ? (
              <a href={medium_url}>{props.user.medium_username}</a>
            ) : (
              "none"
            )}
            <Icon name="github" />
            {props.user.github ? (
              <a href={github_url}>{props.user.github}</a>
            ) : (
              "none"
            )}{" "}
            {"   "}
          </p>
          <h3>{`${props.user.name.split(" ")[0]}'s Posts`}</h3>
          <UserPostList posts={props.user.authored_posts} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state, props) => {
  let cohortName = state.cohorts.find(
    cohort => cohort.id === props.user.cohort_id
  ).name;
  return { cohortName };
};

export default connect(mapStateToProps, null)(UserShow);
