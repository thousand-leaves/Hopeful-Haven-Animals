import React from "react";
import PropTypes from "prop-types";

const Icon = ({ IconImage, IconTitle }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="/">
        <i className={IconImage}></i>
        {IconTitle}
      </a>
    </li>
  );
};

Icon.defaultProps = {
  IconImage: "Unkown",
  IconTitle: "Unkown",
};

Icon.propTypes = {
  IconImage: PropTypes.string.isRequired,
  IconTitle: PropTypes.string.isRequired,
};

export default Icon;
