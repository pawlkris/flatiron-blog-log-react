import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addLibraryPost } from "../../actions/library";
import helper from "../../services/helper";
import { Segment, Button, Icon } from "semantic-ui-react";

const PostShow = props => {
  let tagNames =
    props.post.tags.length > 0 ? helper.tagNames(props.post.tags) : "none";
  let medium_url = `https://medium.com/@${props.post.medium_username}/${
    props.post.slug
  }`;
  return (
    <div className="post-show">
      <Segment style={{ margin: "2% 15%" }}>
        <h2>{props.post.title}</h2>
        <h3>
          <a href={medium_url}>
            <Icon name="medium" /> View on Medium
          </a>{" "}
        </h3>
        <h3>
          <strong>Author:</strong>{" "}
          <Link to={`/cohorts/users/${props.post.author.id}`}>
            {props.post.author.name}
          </Link>
        </h3>
        <h3>Date Posted: {helper.formatDate(props.post.date)}</h3>
        <h3>
          <strong>Reading Time:</strong> {props.post.reading_time} minutes
        </h3>
        <h3>Claps: {props.post.claps}</h3>
        <div className="tag-box">
          <strong>Tags:</strong> {tagNames}
        </div>
        {!!props.userId &&
          (props.likedPosts.includes(props.post.id) ? (
            <div>
              <Icon name="book" />
              This post is in your Library
            </div>
          ) : (
            <Button
              primary
              onClick={() => props.addLibraryPost(props.userId, props.post)}
            >
              Save to Library
            </Button>
          ))}
      </Segment>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: !!state.auth.currentUser.id ? state.auth.currentUser.id : null,
  likedPosts: state.users
    .find(user => user.id === state.auth.currentUser.id)
    .fan_posts.map(post => post.liked_post.id)
});

export default connect(mapStateToProps, { addLibraryPost })(PostShow);
