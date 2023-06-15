import React from "react";
import PropTypes from "prop-types";

const CommentButtonAtom = ({ CommentButtonValue }) => {
  return (
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        {CommentButtonValue}
      </button>
    </div>
  );
};

CommentButtonAtom.defaultProps = {
  CommentButtonValue: "Submit",
};

CommentButtonAtom.propTypes = {
  CommentButtonValue: PropTypes.string.isRequired,
};

export default CommentButtonAtom;
