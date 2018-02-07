const formatDate = date => {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
};

const tagNames = tagObjects => {
  return tagObjects.map(tag => tag.name);
};

// const alphaSort = array =>
// .sort((a,b) => {  if (a.title.toLowerCase() > b.title.toLowerCase()){ return 1} else if (b.title.toLowerCase() > a.title.toLowerCase()){ return -1}else {return 0}}

export default {
  formatDate,
  tagNames
};
