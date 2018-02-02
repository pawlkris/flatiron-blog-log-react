import { FETCH_COHORTS, FETCH_USERS, FETCH_POSTS } from "./types";
import api from "../services/api";

export function fetchData() {
  console.log("fetching");
  return dispatch => {
    api.cohorts.getCohorts().then(data => {
      dispatch({ type: FETCH_COHORTS, cohorts: data });
    });
    api.users.getUsers().then(data => {
      dispatch({ type: FETCH_USERS, users: data });
    });
    api.posts.getPosts().then(data => {
      dispatch({ type: FETCH_POSTS, posts: data });
    });
  };
}

// handleLogin = (user) => {
//   const currentUser = {currentUser: user};
//   localStorage.setItem('token', user.token);
//   this.setState({auth: currentUser}, () => {
//     this.loadTrips()
//     .then(this.props.history.push("/trips/stats"))});
// }
