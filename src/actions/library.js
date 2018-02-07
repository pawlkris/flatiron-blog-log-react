import { DELETE_LIBRARY_POST, ADD_LIBRARY_POST } from "./types";
import api from "../services/api";

export const deleteLibraryPost = (userId, postId, fanPostId) => {
  api.library.deleteLibraryPost(fanPostId).then(console.log);
  return {
    type: DELETE_LIBRARY_POST,
    userId,
    fanPostId
  };
};

export const addLibraryPost = (userId, post) => {
  return dispatch => {
    api.library.addLibraryPost(userId, post.id).then(post => {
      dispatch({
        type: ADD_LIBRARY_POST,
        userId,
        post
      });
    });
  };
};
