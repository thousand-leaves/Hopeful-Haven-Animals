import React from "react";
import PropTypes from "prop-types";

const CommentBarAtom = ({ CommentBarValue }) => {
  return (
    <input
      className="form-control mr-sm-2 mx-2"
      type="text"
      placeholder="add a comment..."
      aria-label={CommentBarValue}
    />
  );
};

CommentBarAtom.defaultProps = {
  CommentBarValue: "text",
};

CommentBarAtom.propTypes = {
  CommentBarValue: PropTypes.string.isRequired,
};

export default CommentBarAtom;
