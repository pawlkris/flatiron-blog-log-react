import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import helper from "../../services/helper";
import { Card } from "semantic-ui-react";

const PostsList = props => {
  const posts = props.posts.map((post, index) => (
    <Post post={post} key={index} />
  ));
  return (
    <div className="post-list">
      <Card.Group>{posts}</Card.Group>
    </div>
  );
};

const mapStateToProps = state => {
  //const filtered === filter posts based on post state
  let posts = [];
  let filterObj = state.postFilter;
  if (state.users.length > 0) {
    let users = state.users;
    if (filterObj["cohort_id"] > 0) {
      users = users.filter(
        user => user.cohort_id === parseInt(filterObj["cohort_id"], 10)
      );
    }
    posts = users.map(user => user.authored_posts);
    posts = posts.reduce((acc, cur) => acc.concat(cur));

    Object.entries(filterObj).forEach(([key, value]) => {
      switch (key) {
        case "tag":
          return (posts = posts.filter(post =>
            helper
              .tagNames(post.tags)
              .join(" - ")
              .toLowerCase()
              .includes(value.toLowerCase())
          ));
        case "title":
          return (posts = posts.filter(post =>
            post.title.toLowerCase().includes(value.toLowerCase())
          ));
        case "sort":
          switch (value) {
            case "newest":
              return posts.sort((a, b) => {
                return b.date - a.date;
              });
            case "oldest":
              return posts.sort((b, a) => {
                return b.date - a.date;
              });
            case "alpha":
              return posts.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                  return 1;
                } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });

            case "alpha-reverse":
              return posts.sort((b, a) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                  return 1;
                } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });
          }
      }
    });
  }

  return {
    posts: posts
  };
};

export default connect(mapStateToProps)(PostsList);
