import React from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

const DashboardContainer = props => {
  let uniqTags = [...new Set(props.tags)];
  let uniqTagCount = uniqTags.map(
    tag => props.tags.filter(t => t === tag).length
  );

  let tagHashes = uniqTags.map((tag, index) => ({
    name: tag,
    count: uniqTagCount[index]
  }));
  tagHashes = tagHashes.sort((a, b) => {
    return b.count - a.count;
  });
  tagHashes = tagHashes.filter(tag => tag.count > 3);
  console.log(tagHashes);

  let chartLabels = [];
  let chartData = [];
  for (let i = 0; i < tagHashes.length; i++) {
    chartLabels.push(tagHashes[i].name);
    chartData.push(tagHashes[i].count);
  }

  let data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Number of Posts with Tag",
        data: chartData
      }
    ]
  };
  console.log(data);

  return (
    <div className="dashboard-container">
      <h1>Blogs by Tag</h1>
      <Bar data={data} />
    </div>
  );
};

const mapStateToProps = state => {
  let tags = [];
  let posts = [];

  if (state.users.length > 0) {
    let users = state.users;
    posts = users.map(user => user.authored_posts);
    posts = posts.reduce((acc, cur) => acc.concat(cur));
    tags = posts.map(post => post.tags);
    tags = tags.reduce((acc, cur) => acc.concat(cur));
    tags = tags.map(tag => tag.name);
  }

  return { tags, posts };
};

export default connect(mapStateToProps, null)(DashboardContainer);
