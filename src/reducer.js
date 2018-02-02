import { FETCH_COHORTS, FETCH_USERS, FETCH_POSTS } from "./actions/types";
import { combineReducers } from "redux";

const authReducer = (state = { currentUser: {} }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cohortsReducer = (
  state = { allCohorts: [], filteredCohorts: [] },
  action
) => {
  switch (action.type) {
    case FETCH_COHORTS:
      console.log("fetching cohorts");
      return { ...state, allCohorts: action.cohorts };
    default:
      return state;
  }
};

const usersReducer = (state = { allUsers: [], filteredUsers: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, allUsers: action.users };
    default:
      return state;
  }
};

const postsReducer = (state = { allPosts: [], filteredPosts: [] }, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, allPosts: action.posts };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  cohorts: cohortsReducer,
  users: usersReducer,
  posts: postsReducer
});

export default rootReducer;
