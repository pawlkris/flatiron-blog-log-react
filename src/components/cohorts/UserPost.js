import React from "react";
import { Link } from "react-router-dom";
import { List, Button, Icon } from "semantic-ui-react";
import { addLibraryPost } from "../../actions/library";
import { connect } from "react-redux";
import helper from "../../services/helper";

const UserPost = props => {
  return (
    <List.Item>
      <List.Content>
        <List.Header as={Link} to={`/posts/${props.post.id}`}>
          {props.post.title}
        </List.Header>
        <List.Description>
          {helper.formatDate(props.post.date)}
        </List.Description>
        {!!props.userId &&
          (props.likedPosts.includes(props.post.id) ? (
            <List.Description>
              <Icon name="book" />
              This post is in your Library
            </List.Description>
          ) : (
            <Button
              size="tiny"
              primary
              onClick={() => props.addLibraryPost(props.userId, props.post)}
            >
              <Icon name="bookmark" />
              Save Post
            </Button>
          ))}
      </List.Content>
    </List.Item>
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

export default connect(mapStateToProps, { addLibraryPost })(UserPost);
