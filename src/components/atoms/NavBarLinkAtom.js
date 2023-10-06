import React from "react";
import PropTypes from "prop-types";

const NavBarLinkAtom = ({ icon, linkTitle }) => (
    <li className="nav-item">
      <a className="nav-link hover-effect" href="/">
        <i className={icon} aria-hidden="true"></i>
        {linkTitle}
      </a>
    </li>
  );

NavBarLinkAtom.defaultProps = {
  linkTitle: "Link",
};

NavBarLinkAtom.propTypes = {
  linkTitle: PropTypes.string.isRequired,
};

export default NavBarLinkAtom;
