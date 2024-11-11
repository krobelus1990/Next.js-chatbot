import React from "react";

const ResultButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="btn bg-[#b69b6c] hover:bg-[#b69b6c] border-none text-white sm:w-20 w-full"
  >
    {text}
  </button>
);

export default ResultButton;
