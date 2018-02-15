import React from "react";
import { connect } from "react-redux";
import DashboardFilter from "./DashboardFilter";
import DashboardChart from "./DashboardChart";
import DashboardTable from "./DashboardTable";
import { Statistic, Grid, Header } from "semantic-ui-react";

class DashboardContainer extends React.Component {
  render() {
    let { users, posts, filter } = this.props;
    if (filter.cohort_id) {
      users = users.filter(user => user.cohort_id === filter.cohort_id);
    }
    let userTags = users
      .reduce((acc, cur) => acc.concat(cur.authored_posts), [])
      .reduce((acc, cur) => acc.concat(cur.tags), [])
      .map(tag => tag.name);
    let uniqTags = [...new Set(userTags)];
    let uniqTagCount = uniqTags.map(
      tag => userTags.filter(t => t === tag).length
    );
    let tagHashes = uniqTags.map((tag, index) => ({
      name: tag,
      count: uniqTagCount[index]
    }));
    tagHashes = tagHashes.sort((a, b) => {
      return b.count - a.count;
    });
    return (
      <div className="dashboard-container">
        <Header as="h1">BLOG STATS</Header>
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <DashboardFilter />
            </Grid.Column>
            <Grid.Column width={4} />
            <Grid.Column width={4}>
              <Statistic.Group horizontal>
                <Statistic>
                  <Statistic.Value>
                    {filter.cohort_id
                      ? posts.filter(
                          post => post.author.cohort_id === filter.cohort_id
                        ).length
                      : posts.length}
                  </Statistic.Value>
                  <Statistic.Label>Blog Posts</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{users.length}</Statistic.Value>
                  <Statistic.Label>Users</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{uniqTags.length}</Statistic.Value>
                  <Statistic.Label>Unique Tags</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header>Top Ten Blog Tags</Header>
            <DashboardChart tagHashes={tagHashes} />
            <Header>Frequency of All Tags</Header>
            <DashboardTable tagHashes={tagHashes} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let users = state.users;
  let posts = users.map(user => user.authored_posts);
  posts = posts.reduce((acc, cur) => acc.concat(cur));

  return {
    filter: state.dashboardFilter,
    posts,
    users
  };
};

export default connect(mapStateToProps, null)(DashboardContainer);
