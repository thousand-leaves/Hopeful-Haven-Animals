import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Icon = ({ IconImage, IconTitle }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/">
        <i className={IconImage}></i>
        {IconTitle}
      </Link>
    </li>
  );
};

Icon.defaultProps = {
  IconImage: "Unknown",
  IconTitle: "Unknown",
};

Icon.propTypes = {
  IconImage: PropTypes.string.isRequired,
  IconTitle: PropTypes.string.isRequired,
};

export default Icon;
