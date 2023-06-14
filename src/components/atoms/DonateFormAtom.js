import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const InputAtom = ({ type, name, value, onChange, placeholder, error, id }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classnames("form-control form-control-lg", {
        "is-invalid": error,
      })}
      id={id}
    />
  );
};

InputAtom.defaultProps = {
  type: "text",
  name: "Unknown",
  value: "Unknown",
  placeholder: "Unknown",
  id: "Unknown",
};

InputAtom.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputAtom;
