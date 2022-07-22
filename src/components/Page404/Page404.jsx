import React from "react";
import "./Page404CSS.css";

import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="page404-container">
      <h1> Nothing Found</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="page404-btn"
      >
        Go back
      </button>
    </div>
  );
};

export default Page404;
