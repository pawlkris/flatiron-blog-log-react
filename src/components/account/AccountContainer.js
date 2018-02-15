import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Route, Switch } from "react-router-dom";
import { withAuth } from "../../hocs/withAuth";
import LikedPostsList from "./LikedPostsList";
import AuthoredPostsList from "./AuthoredPostsList";
import EditAccountInfo from "./EditAccountInfo";
import AccountHome from "./AccountHome";

const AccountContainer = ({ user }) => {
  return (
    <div className="library_container">
      <Switch>
        <Route
          exact
          path="/account/saved-posts"
          render={() => <LikedPostsList />}
        />
        <Route exact path="/account/your-posts" component={AuthoredPostsList} />
        <Route exact path="/account/edit" component={EditAccountInfo} />
        <Route exact path="/account" component={AccountHome} />
      </Switch>
    </div>
  );
};

export default withAuth(connect(null, actions)(AccountContainer));
