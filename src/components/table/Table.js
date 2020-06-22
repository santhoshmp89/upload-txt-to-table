import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Table = props => {
  const renderTableHeader = row => {
    return row.map((key, index) => {
      return props.columnSize >= index + 1 && <td key={key}>{key}</td>;
    });
  };
  return (
    <table id="simple-board">
      <tbody>
        {props.rows.map(row => {
          return <tr key={row}>{renderTableHeader(row)}</tr>;
        })}
      </tbody>
    </table>
  );
};

Table.proptypes = {
  rows: PropTypes.array.isRequired,
  columnSize: PropTypes.number.isRequired
};

export default Table;
