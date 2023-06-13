import React from "react";
import PropTypes from "prop-types";

const LogoAtom = ({ src, alt }) => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <a href="/" className="logo-link" onClick={handleClick}>
      <img src={src} alt={alt} className="logo-image" />
    </a>
  );
};

LogoAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LogoAtom;
