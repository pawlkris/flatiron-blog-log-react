import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { withAuth } from "../../hocs/withAuth";
import LikedPostsList from "./LikedPostsList";
import AuthoredPostsList from "./AuthoredPostsList";
import EditAccountInfo from "./EditAccountInfo";

const AccountContainer = ({ user }) => {
  return (
    <div className="library_container">
      <h1>Your Account</h1>
      <LikedPostsList />
      <AuthoredPostsList />
      <EditAccountInfo />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.users.filter(user => user.id === state.auth.currentUser.id)
});

export default withAuth(connect(mapStateToProps, actions)(AccountContainer));
