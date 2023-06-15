import React from "react";
import PropTypes from "prop-types";

const IconOnlyAtom = ({ IconImage }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" to="/">
        <i className={IconImage}></i>
      </a>
    </li>
  );
};

IconOnlyAtom.defaultProps = {
  IconImage: "Unknown",
};

IconOnlyAtom.propTypes = {
  IconImage: PropTypes.string.isRequired,
};

export default IconOnlyAtom;
