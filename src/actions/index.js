import {
  FETCH_COHORTS,
  FETCH_USERS,
  FETCH_TAGS,
  ADD_USER,
  EDIT_USER,
  ASYNC_START,
  SIGNUP_ERROR,
  REMOVE_SIGNUP_ERROR,
  REMOVE_NEW_USER_MESSAGE
} from "./types";
import api from "../services/api";

export function fetchData() {
  return dispatch => {
    dispatch({ type: ASYNC_START });
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
      if (user.errors) {
        dispatch({ type: SIGNUP_ERROR, message: user });
      } else {
        dispatch({ type: ADD_USER, user });
        history.push("/login");
      }
    });
  };
}

export function removeNewUserMessage() {
  return { type: REMOVE_NEW_USER_MESSAGE };
}

export const removeSignupError = () => {
  return { type: REMOVE_SIGNUP_ERROR };
};

export function editUser(userId, user, history) {
  return dispatch => {
    api.users.editUser(user).then(updatedUser => {
      dispatch({ type: EDIT_USER, updatedUser, userId });
      history.push("/account");
    });
  };
}
