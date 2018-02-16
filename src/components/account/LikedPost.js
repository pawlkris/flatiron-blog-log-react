import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLibraryPost } from "../../actions/library";
import helper from "../../services/helper";
import { Card, Button, Icon } from "semantic-ui-react";

class LikedPost extends React.Component {
  render() {
    let { id, userId, liked_post, deleteLibraryPost } = this.props;

    let medium_url = `https://medium.com/@${
      liked_post.author.medium_username
    }/${liked_post.slug}`;

    return (
      <Card centered>
        <Card.Content>
          <Link to={`/posts/${liked_post.id}`}>
            <h3>{liked_post.title}</h3>
          </Link>

          <div>
            <Link to={`/cohorts/users/${liked_post.author.id}`}>
              <Icon name="user" />
              {liked_post.author.name}
            </Link>
          </div>

          <div>
            <Icon name="calendar" /> {helper.formatDate(liked_post.date)}
          </div>
          <p>
            <a href={medium_url} target="_blank">
              <Icon name="medium" /> View on Medium
            </a>{" "}
          </p>
        </Card.Content>
        <Button
          basic
          color="red"
          attached="bottom"
          onClick={() => deleteLibraryPost(userId, liked_post.id, id)}
        >
          <Icon name="delete" /> Remove From Library
        </Button>
      </Card>
    );
  }
}

export default connect(null, { deleteLibraryPost })(LikedPost);
