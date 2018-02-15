import React from "react";
import { connect } from "react-redux";
import { updatePostFilter } from "../../actions/filter";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DashboardTableRow = props => {
  return (
    <Table.Row>
      <Table.Cell>
        <Link
          to={`/posts/`}
          onClick={() => props.updatePostFilter(props.filter)}
        >
          {props["name"]}
        </Link>
      </Table.Cell>
      <Table.Cell>{props["count"]}</Table.Cell>
    </Table.Row>
  );
};

const mapStateToProps = (state, props) => {
  let updatedFilter = { ...state.postFilter };
  updatedFilter.cohort_id = state.dashboardFilter.cohort_id;
  updatedFilter.tag = props["name"];
  return { filter: updatedFilter };
};

export default connect(mapStateToProps, { updatePostFilter })(
  DashboardTableRow
);
