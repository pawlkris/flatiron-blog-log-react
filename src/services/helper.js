import React from "react";

const formatDate = date => {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
};

const tagNames = tagObjects => {
  return tagObjects.map((tag, index) => (
    <div className="tag" key={index}>
      {tag.name}
    </div>
  ));
};

const validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const cohortsObjForDropdown = cohorts => {
  let cohortOptions = cohorts.map((cohort, index) => ({
    key: index,
    text: cohort.name,
    value: cohort.id
  }));
  cohortOptions.unshift({ key: "", text: "", value: "" });
  return cohortOptions;
};

// const alphaSort = array =>
// .sort((a,b) => {  if (a.title.toLowerCase() > b.title.toLowerCase()){ return 1} else if (b.title.toLowerCase() > a.title.toLowerCase()){ return -1}else {return 0}}

export default {
  formatDate,
  tagNames,
  validateEmail,
  cohortsObjForDropdown
};
