import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Input = props => {
  const handleChange = e => {
    if (props.handleChange) {
      props.handleChange(e);
    }
  };
  console.log("props");
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input type={props.type} onChange={handleChange} value={props.value} />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  label: "",
  handleChange: () => {}
};

export default Input;
