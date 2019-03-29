import React from "react";
import "./Button.scss";

const Button = ({ onClick, tag }) => {
  return (
    <button className="btn" onClick={onClick}>
      {tag}
    </button>
  );
};

export default Button;
