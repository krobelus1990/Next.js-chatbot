import React from "react";

const Question = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder="Ask your question..."
      className="input input-bordered w-[700px]"
    />
  );
};

export default Question;
