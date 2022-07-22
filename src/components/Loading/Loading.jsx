import React from "react";
import "./LoadingCSS.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="bounce">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
