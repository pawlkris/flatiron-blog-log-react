import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLibraryPost } from "../../actions/library";
import helper from "../../services/helper";

const LikedPost = ({ id, userId, liked_post, deleteLibraryPost }) => {
  let medium_url = `https://medium.com/@${liked_post.author.medium_username}/${
    liked_post.slug
  }`;
  let tagNames =
    liked_post.tags.length > 0
      ? liked_post.tags.map(tag => tag.name).join(" - ")
      : "none";
  return (
    <div className="liked-post">
      <Link to={`/posts/${liked_post.id}`}>
        <h3>{liked_post.title}</h3>
      </Link>
      <p>Author: {liked_post.author.name}</p>
      <p>Date Posted: {helper.formatDate(liked_post.date)}</p>
      <p>Tags: {tagNames}</p>
      <p>
        <a href={medium_url}>View on Medium</a>
      </p>
      <button onClick={() => deleteLibraryPost(userId, liked_post.id, id)}>
        Remove From Library
      </button>
    </div>
  );
};

export default connect(null, { deleteLibraryPost })(LikedPost);
