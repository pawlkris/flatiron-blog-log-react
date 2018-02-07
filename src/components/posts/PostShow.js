import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addLibraryPost } from "../../actions/library";
import helper from "../../services/helper";

const PostShow = props => {
  let tagNames =
    props.post.tags.length > 0
      ? helper.tagNames(props.post.tags).join(" - ")
      : "none";
  let medium_url = `https://medium.com/@${props.post.medium_username}/${
    props.post.slug
  }`;
  return (
    <div className="post-show">
      <h2>{props.post.title}</h2>
      <p>Author: {props.post.author.name}</p>
      <p>Date Posted: {helper.formatDate(props.post.date)}</p>
      <a href={medium_url}>View on Medium</a>
      <p>Tags: {tagNames}</p>
      {!!props.userId &&
        (props.likedPosts.includes(props.post.id) ? (
          <p>You Liked this post</p>
        ) : (
          <button
            onClick={() => props.addLibraryPost(props.userId, props.post)}
          >
            Save to Library
          </button>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  likedPosts: state.users
    .find(user => user.id === state.auth.currentUser.id)
    .fan_posts.map(post => post.liked_post.id)
});

export default connect(mapStateToProps, { addLibraryPost })(PostShow);
