const API_ROOT = `https://flatiron-blog-log-backend.herokuapp.com/api`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const getCohorts = () => {
  return fetch(`${API_ROOT}/cohorts`, {
    headers: headers
  }).then(res => res.json());
};

const getUsers = () => {
  return fetch(`${API_ROOT}/users`).then(res => res.json());
};

const getTags = () => {
  return fetch(`${API_ROOT}/tags`).then(res => res.json());
};

const getWithToken = url => {
  const token = localStorage.getItem("token");
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const deleteLibraryPost = id => {
  return fetch(`${API_ROOT}/fan_posts/${id}`, {
    method: "delete",
    headers: headers
  });
};

const addLibraryPost = (userId, postId) => {
  return fetch(`${API_ROOT}/fan_posts`, {
    method: "post",
    headers: headers,
    body: JSON.stringify({ fan_id: userId, liked_post_id: postId })
  }).then(res => res.json());
};

const newUser = user => {
  return fetch(`${API_ROOT}/users`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(user)
  }).then(res => res.json());
};

const editUser = user => {
  return fetch(`${API_ROOT}/users/${user.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(user)
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  },
  cohorts: {
    getCohorts
  },
  users: {
    getUsers,
    newUser,
    editUser
  },
  tags: {
    getTags
  },
  library: {
    deleteLibraryPost,
    addLibraryPost
  }
};
