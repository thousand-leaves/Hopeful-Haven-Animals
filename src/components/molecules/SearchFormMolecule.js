import React from "react";
import PropTypes from "prop-types";
import SearchButtonAtom from "../atoms/SearchButtonAtom";
import SearchBarAtom from "../atoms/SearchBarAtom";

const SearchBar = ({ SearchBarValue, SearchButtonValue }) => {
  return (
    <form className="form-inline my-2 my-lg-0 d-flex">
      <SearchBarAtom SearchBarValue="Search" />
      <SearchButtonAtom SearchButtonValue="Search" />
    </form>
  );
};

SearchBar.defaultProps = {
  SearchBarValue: "Search",
  SearchButtonValue: "Search",
};

SearchBar.propTypes = {
  SearchBarValue: PropTypes.string.isRequired,
  SearchButtonValue: PropTypes.string.isRequired,
};

export default SearchBar;
