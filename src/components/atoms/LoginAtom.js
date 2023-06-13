import React from "react";
import PropTypes from "prop-types";

const LoginAtom = ({ LoginImage, LoginTitle }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="/">
        {LoginTitle}
        <i className={LoginImage}></i>
      </a>
    </li>
  );
};

LoginAtom.defaultProps = {
  LoginImage: "Unknown",
  LoginTitle: "Unknown",
};

LoginAtom.propTypes = {
  LoginImage: PropTypes.string.isRequired,
  LoginTitle: PropTypes.string.isRequired,
};

export default LoginAtom;
