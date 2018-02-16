import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { addLibraryPost } from "../../actions/library";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CohortPostCard = props => {
  let medium_url = `https://medium.com/@${props.post.medium_username}/${
    props.post.slug
  }`;
  return (
    <Card centered>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={`https://cdn-images-1.medium.com/fit/c/200/200/${
            props.post.author.image_slug
          }`}
        />

        <Link to={`/posts/${props.post.id}`}>
          <h3>{props.post.title}</h3>
        </Link>
        <Link to={`/cohorts/users/${props.post.author.id}`}>
          {props.post.author.name}
        </Link>
        <br />
        <a href={medium_url} target="_blank">
          <Icon name="medium" />View on Medium
        </a>
      </Card.Content>
      {!!props.userId &&
        (props.likedPosts.includes(props.post.id) ? (
          <Card.Meta>
            <Icon name="book" />
            This post is in your Library
          </Card.Meta>
        ) : (
          <Button
            attached="bottom"
            primary
            onClick={() => props.addLibraryPost(props.userId, props.post)}
          >
            <Icon name="bookmark" />
            Save Post
          </Button>
        ))}
    </Card>
  );
};

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  likedPosts: !!state.auth.currentUser.id
    ? state.users
        .find(user => user.id === state.auth.currentUser.id)
        .fan_posts.map(post => post.liked_post.id)
    : []
});

export default connect(mapStateToProps, { addLibraryPost })(CohortPostCard);
