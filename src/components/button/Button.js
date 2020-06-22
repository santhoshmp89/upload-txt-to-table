import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };
  return <button onClick={handleClick}>{props.displayName}</button>;
};

Button.propTypes = {
  displayName: PropTypes.string
};

export default Button;
