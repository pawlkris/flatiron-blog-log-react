import React from "react";
import PostShow from "./PostShow";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

class PostsContainer extends React.Component {
  render() {
    return (
      <div className="posts-container">
        <p>Blog Posts</p>
        <Switch>
          <Route
            path="/posts/:id"
            render={({ match }) => {
              let post = "";
              if (this.props.posts.length > 0) {
                post = this.props.posts.find(
                  post => post.id === parseInt(match.params.id, 10)
                );
              }
              return post ? <PostShow post={post} /> : <div>Loading...</div>;
            }}
          />
          <Route
            path="/posts"
            render={() => {
              return (
                <div className="all-posts">
                  <PostFilter />
                  <PostList />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let posts = [];
  if (state.users.length > 0) {
    posts = state.users.map(user => user.authored_posts);
    posts = posts.reduce((acc, cur) => acc.concat(cur));
  }
  return { posts };
};

export default connect(mapStateToProps, null)(PostsContainer);
