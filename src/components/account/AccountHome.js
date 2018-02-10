import React from "react";
import { connect } from "react-redux";

const AccountHome = props => {
  console.log(props);
  return !!props.user ? (
    <div className="account-home">
      <img
        src={`https://cdn-images-1.medium.com/fit/c/200/200/${
          props.user.image_slug
        }`}
      />
      <p>
        <strong>Medium Username:</strong> {props.user.medium_username}
      </p>
      <p>
        <strong>Name:</strong> {props.user.name}
      </p>
      <p>
        <strong>Posts:</strong> {props.user.authored_posts.length}
      </p>
      <p>
        <strong>Total Claps: </strong>
        {props.clapCount}
      </p>
    </div>
  ) : (
    <div>
      <h1>Loading... </h1>
    </div>
  );
};

const mapStateToProps = state => {
  let user;
  let clapCount;
  if (state.users.length > 0) {
    user = state.users.find(user => user.id === state.auth.currentUser.id);
    let clapArr = user.authored_posts.map(post => post.claps);
    clapCount = clapArr.reduce((acc, curr) => acc + parseInt(curr.claps));
  }
  return { user, clapCount };
};

export default connect(mapStateToProps, null)(AccountHome);
