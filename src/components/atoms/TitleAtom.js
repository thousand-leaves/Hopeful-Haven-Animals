import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <a className="navbar-brand" href="/">
      {title}
    </a>
  );
};

Title.defaultProps = {
  title: "Hopeful Haven Animals",
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
