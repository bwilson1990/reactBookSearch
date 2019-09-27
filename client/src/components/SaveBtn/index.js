import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      &#9989;
    </span>
  );
}

export default SaveBtn;