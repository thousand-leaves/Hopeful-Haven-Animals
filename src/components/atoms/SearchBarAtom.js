import React from "react";
import PropTypes from "prop-types";

const Input = ({ SearchBarValue }) => {
  return (
    <input
      className="form-control mr-sm-2 mx-2"
      type="text"
      placeholder="Search"
      aria-label={SearchBarValue}
    />
  );
};

Input.defaultProps = {
  SearchBarValue: "Search",
};

Input.propTypes = {
  SearchBarValue: PropTypes.string.isRequired,
};

export default Input;
