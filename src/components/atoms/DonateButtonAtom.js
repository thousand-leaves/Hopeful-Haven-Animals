import React from "react";
import PropTypes from "prop-types";

const DonateButtonAtom = ({ DonateButtonValue }) => {
  return (
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        {DonateButtonValue}
      </button>
    </div>
  );
};

DonateButtonAtom.defaultProps = {
  DonateButtonValue: "Submit",
};

DonateButtonAtom.propTypes = {
  DonateButtonValue: PropTypes.string.isRequired,
};

export default DonateButtonAtom;
