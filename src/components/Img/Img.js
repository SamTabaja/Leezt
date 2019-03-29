import React from "react";
import "./Img.scss";

const Img = ({ imgSrc }) => {
  return (
    <div className="img">
      <img src={imgSrc} />
    </div>
  );
};

export default Img;
