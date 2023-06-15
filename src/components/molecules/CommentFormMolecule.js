import React from "react";
import CommentButtonAtom from "../atoms/CommentButtonAtom";
import CommentBarAtom from "../atoms/CommentBarAtom";

const CommentForm = ({ CommentBarValue, CommentButtonValue }) => {
  return (
    <form className="form-inline my-2 my-lg-0 d-flex">
      <CommentBarAtom CommentBarValue="Add a Comment" />
      <CommentButtonAtom CommentButtonValue="Submit" />
    </form>
  );
};

export default CommentForm;
