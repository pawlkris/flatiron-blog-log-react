import React from "react";
import { connect } from "react-redux";
import { updatePostFilter } from "../../actions/filter";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import helper from "../../services/helper";

class PostFilter extends React.Component {
  state = {
    tag: this.props.filter.tag,
    title: this.props.filter.title,
    cohort: this.props.filter.cohort,
    sort: this.props.filter.sort
  };

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  handleDropdownChange = (event, key, data) => {
    this.setState({ [key]: data.value });
  };

  handleSubmit = (event, data) => {
    this.props.updatePostFilter(this.state);
  };

  render() {
    console.log("filter state", this.state);
    let cohortOptions = helper.cohortsObjForDropdown(this.props.cohorts);

    let sortOptions = [
      { key: "", text: "", value: "" },
      { key: "new", text: "Chronological (Recent First)", value: "newest" },
      { key: "old", text: "Chronological (Oldest First)", value: "oldest" },
      { key: "alph", text: "Post Name (A-Z)", value: "alpha" },
      { key: "alph-rev", text: "Post Name (Z-A)", value: "alpha-reverse" },
      { key: "claps", text: "Most Claps", value: "most-claps" }
    ];

    return (
      <div className="post-filter">
        <Segment style={{ margin: "2% 10%" }}>
          <Header as="h1">Search Blog Posts</Header>

          <Form onSubmit={event => this.handleSubmit(event, this.state)}>
            <Form.Input
              label="Title:"
              value={this.state.title}
              onChange={event => this.handleChange(event, "title")}
            />
            <Form.Input
              label="Tag:"
              type="text"
              value={this.state.tag}
              onChange={event => this.handleChange(event, "tag")}
            />
            <Form.Group>
              <Form.Select
                label="Cohort:"
                value={this.state.cohort}
                onChange={(event, data) =>
                  this.handleDropdownChange(event, "cohort", data)
                }
                options={cohortOptions}
              />
              <Form.Select
                label="Sort By:"
                value={this.state.sortBy}
                onChange={(event, data) =>
                  this.handleDropdownChange(event, "sort", data)
                }
                options={sortOptions}
              />
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cohorts: state.cohorts,
  filter: state.postFilter
});

export default connect(mapStateToProps, { updatePostFilter })(PostFilter);
