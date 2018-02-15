import React from "react";
import { Table } from "semantic-ui-react";
import DashboardTableRow from "./DashboardTableRow";

const DashboardTable = props => {
  let { tagHashes } = props;
  let tagData = tagHashes.map((hash, index) => (
    <DashboardTableRow {...hash} key={index} />
  ));
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Tag Name</Table.HeaderCell>
          <Table.HeaderCell>Posts</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{tagData}</Table.Body>
    </Table>
  );
};

export default DashboardTable;
