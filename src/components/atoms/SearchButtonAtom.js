import React from "react";
import PropTypes from "prop-types";

const SearchButtonAtom = ({ SearchButtonValue }) => {
  return (
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        {SearchButtonValue}
      </button>
    </div>
  );
};

SearchButtonAtom.defaultProps = {
  SearchButtonValue: "Search",
};

SearchButtonAtom.propTypes = {
  SearchButtonValue: PropTypes.string.isRequired,
};

export default SearchButtonAtom;
