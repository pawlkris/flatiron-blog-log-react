import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLibraryPost } from "../../actions/library";
import helper from "../../services/helper";
import { Card, Button, Icon } from "semantic-ui-react";

const LikedPost = ({ id, userId, liked_post, deleteLibraryPost }) => {
  let medium_url = `https://medium.com/@${liked_post.author.medium_username}/${
    liked_post.slug
  }`;

  return (
    <Card centered>
      <Card.Content>
        <Link to={`/posts/${liked_post.id}`}>
          <h3>{liked_post.title}</h3>
        </Link>
        <Link to={`/cohorts/users/${liked_post.author.id}`}>
          <p>Author: {liked_post.author.name}</p>
        </Link>
        <p>Date Posted: {helper.formatDate(liked_post.date)}</p>
        <p>
          <a href={medium_url}>
            <Icon name="medium" /> View on Medium
          </a>{" "}
        </p>
      </Card.Content>
      <Button
        attached="bottom"
        onClick={() => deleteLibraryPost(userId, liked_post.id, id)}
      >
        Remove From Library
      </Button>
    </Card>
  );
};

export default connect(null, { deleteLibraryPost })(LikedPost);
