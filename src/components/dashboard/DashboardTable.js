import React from "react";
import { Table } from "semantic-ui-react";

const DashboardTable = props => {
  let { tagHashes } = props;
  let tagData = tagHashes.map((hash, index) => (
    <Table.Row key={index}>
      <Table.Cell>{hash["name"]}</Table.Cell>
      <Table.Cell>{hash["count"]}</Table.Cell>
    </Table.Row>
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
