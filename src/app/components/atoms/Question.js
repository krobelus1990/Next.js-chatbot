import React from "react";

const Question = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder="Ask your question..."
      className="input input-bordered w-full sm:w-[700px] bg-[#dcdcdb] text-black text-xl p-6"
    />
  );
};

export default Question;
