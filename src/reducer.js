import {
  FETCH_COHORTS,
  FETCH_USERS,
  FETCH_TAGS,
  SET_CURRENT_USER,
  LOGOUT_USER,
  DELETE_LIBRARY_POST,
  ADD_LIBRARY_POST,
  ADD_USER,
  EDIT_USER,
  UPDATE_POST_FILTER
} from "./actions/types";
import { combineReducers } from "redux";

const authReducer = (state = { currentUser: {} }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username } };
    case LOGOUT_USER:
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};

const cohortsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COHORTS:
      return action.cohorts;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    case DELETE_LIBRARY_POST:
      let user = state.find(user => user.id === action.userId);
      let newLiked = user.fan_posts.filter(
        post => post.id !== action.fanPostId
      );
      user.fan_posts = newLiked;
      let noUser = state.filter(user => user.id !== action.userId);
      return [...noUser, user];
    case ADD_LIBRARY_POST:
      user = state.find(user => user.id === action.userId);
      user.fan_posts = [...user.fan_posts, action.post];
      noUser = state.filter(user => user.id !== action.userId);
      return [...noUser, user];
      return;
    case ADD_USER:
      return [...state, action.user];
    case EDIT_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

const postFilterReducer = (
  state = {
    tag: "",
    title: "",
    cohort_id: "",
    sort: "newest"
  },
  action
) => {
  switch (action.type) {
    case UPDATE_POST_FILTER:
      return {
        tag: action.tag,
        title: action.title,
        cohort_id: action.cohort,
        sort: action.sort
      };
    default:
      return state;
  }
};

const tagsReducer = (state = { allTags: [], filteredTags: [] }, action) => {
  switch (action.type) {
    case FETCH_TAGS:
      return { ...state, allTags: action.tags };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  cohorts: cohortsReducer,
  users: usersReducer,
  postFilter: postFilterReducer,
  tags: tagsReducer
});

export default rootReducer;
