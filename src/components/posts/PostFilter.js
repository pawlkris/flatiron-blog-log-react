import React from "react";
import { connect } from "react-redux";
import { updatePostFilter } from "../../actions/filter";

class PostFilter extends React.Component {
  state = {
    tag: this.props.filter.tag,
    title: this.props.filter.title,
    cohort: this.props.filter.cohort,
    sort: this.props.filter
  };

  handleChange = (event, key) => {
    event.preventDefault();
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event, state) => {
    event.preventDefault();
    this.props.updatePostFilter(this.state);
  };

  render() {
    console.log(this.props);
    let cohortOptions = this.props.cohorts.map((cohort, index) => (
      <option key={index} value={cohort.id}>
        {cohort.name}
      </option>
    ));
    return (
      <div className="post-filter">
        <form onSubmit={event => this.handleSubmit(event, this.state)}>
          <label>Tag: </label>
          <input
            type="text"
            value={this.state.tag}
            onChange={event => this.handleChange(event, "tag")}
          />
          <label>Title: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={event => this.handleChange(event, "title")}
          />
          <label>Cohort</label>
          <select
            className="ui fluid dropdown"
            value={this.state.cohort}
            onChange={event => this.handleChange(event, "cohort")}
          >
            <option value="">Cohort</option>
            {cohortOptions}
          </select>
          <label>Sort By:</label>
          <select
            className="ui fluid dropdown"
            value={this.state.sortBy}
            onChange={event => this.handleChange(event, "sort")}
          >
            <option value="newest">Chronological (Recent First)</option>
            <option value="oldest">Chronological (Oldest First)</option>
            <option value="alpha">Post Name (A-Z)</option>
            <option value="alpha-reverse">Post Name (Z-A)</option>
            <option value="most-claps">Most Claps</option>
          </select>
          <button className="ui button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cohorts: state.cohorts,
  filter: state.postFilter
});

export default connect(mapStateToProps, { updatePostFilter })(PostFilter);
