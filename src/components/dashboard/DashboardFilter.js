import React from "react";
import { connect } from "react-redux";
import {
  updateDashboardFilter,
  clearDashboardFilter
} from "../../actions/filter";
import { Button, Form, Header } from "semantic-ui-react";
import helper from "../../services/helper";

class DashboardFilter extends React.Component {
  state = {
    chartType: this.props.filter.chartType,
    cohort_id: this.props.filter.cohort_id,
    minTags: this.props.filter.minTags
  };

  componentWillUnmount() {
    this.props.clearDashboardFilter();
  }

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  handleDropdownChange = (event, key, data) => {
    this.setState({ [key]: data.value });
  };

  handleSubmit = (event, data) => {
    this.props.updateDashboardFilter(this.state);
  };

  render() {
    let cohortOptions = helper.cohortsObjForDropdown(this.props.cohorts);

    return (
      <div className="post-filter">
        <Header as="h3">Dashboard Filter </Header>

        <Form onSubmit={event => this.handleSubmit(event, this.state)}>
          <Form.Select
            width={4}
            label="Cohort:"
            value={this.state.cohort_id}
            onChange={(event, data) =>
              this.handleDropdownChange(event, "cohort_id", data)
            }
            options={cohortOptions}
          />
          <br />
          <Button floated="left">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cohorts: state.cohorts,
  filter: state.dashboardFilter
});

export default connect(mapStateToProps, {
  updateDashboardFilter,
  clearDashboardFilter
})(DashboardFilter);

// <Form.Input
// label="Output Type:"
// value={this.state.outputType}
// onChange={event =>
//   this.handleDropdownChange(event, "outputType", data)
// }
// />
