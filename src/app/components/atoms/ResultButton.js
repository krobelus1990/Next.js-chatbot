import React from "react";

const ResultButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="btn btn-info text-white"
  >
    {text}
  </button>
);

export default ResultButton;
