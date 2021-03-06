import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  REMOVE_LOGIN_ERROR
} from "./types";
import api from "../services/api";

export const setCurrentUser = () => dispatch => {
  api.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  api.auth.login({ username, password }).then(user => {
    if (user.error) {
      dispatch({ type: LOGIN_ERROR, message: user.error });
    } else {
      localStorage.setItem("token", user.jwt);
      dispatch({ type: SET_CURRENT_USER, user });
      history.push("/account");
    }
  });
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};

export const removeLoginError = () => {
  return { type: REMOVE_LOGIN_ERROR };
};
