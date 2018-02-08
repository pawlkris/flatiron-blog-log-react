import {
  FETCH_COHORTS,
  FETCH_USERS,
  FETCH_TAGS,
  ADD_USER,
  EDIT_USER
} from "./types";
import api from "../services/api";

export function fetchData() {
  return dispatch => {
    api.cohorts.getCohorts().then(data => {
      dispatch({ type: FETCH_COHORTS, cohorts: data });
    });
    api.users.getUsers().then(data => {
      dispatch({ type: FETCH_USERS, users: data });
    });
    api.tags.getTags().then(data => {
      dispatch({ type: FETCH_TAGS, tags: data });
    });
  };
}

export function newUser(user, history) {
  return dispatch => {
    api.users.newUser(user).then(user => {
      dispatch({ type: ADD_USER, user });
      history.push("/login");
    });
  };
}

export function editUser(userId, user) {
  return dispatch => {
    api.users.editUser(user).then(user => {
      dispatch({ type: EDIT_USER, user, userId });
    });
  };
}
