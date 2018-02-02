const API_ROOT = `http://localhost:3001/api`;

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

const getPosts = () => {
  return fetch(`${API_ROOT}/posts`).then(res => res.json());
};

// const token = localStorage.getItem("token");

// const login = (username, password) => {
//   return fetch(`${API_ROOT}/auth`, {
//     method: 'post',
//     headers: headers,
//     body: JSON.stringify({username,password})
//   })
//   .then(res => res.json());
// }
//
//
// const getCurrentUser = () => {
//   return fetch(`${API_ROOT}/current_user`, {
//     headers: headers
//   })
//   .then(res => res.json());
// }
//
// const newUser = (user) => {
//   return fetch(`${API_ROOT}/users`, {
//     method: "post",
//     headers: headers,
//     body: JSON.stringify(user)
//   })
//   .then(res => res.json())
// }

export default {
  // auth: {
  //   login,
  //   getCurrentUser
  // },
  cohorts: {
    getCohorts
  },
  posts: {
    getPosts
  },
  users: {
    getUsers
    // newUser,
  }
};
