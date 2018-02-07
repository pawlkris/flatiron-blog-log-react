import { SET_CURRENT_USER, LOGOUT_USER } from "./types";
import api from "../services/api";

export const setCurrentUser = () => dispatch => {
  api.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  api.auth.login({ username, password }).then(user => {
    localStorage.setItem("token", user.jwt);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/account");
  });
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};
