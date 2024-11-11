// src/components/molecules/UserAction.js
import React, { useState } from "react";
import Title from "../atoms/Title";
import Question from "../atoms/Question";
import ResultButton from "../atoms/ResultButton";

const UserAction = ({ titleText, titleColor, buttonText, onButtonClick }) => {
  const [question, setQuestion] = useState("");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSendClick = () => {
    onButtonClick(question);
    setQuestion("");
  };
  const handleSendPress = (event) => {
    if (event.key === "Enter") {
      onButtonClick(question);
      setQuestion("");
    }
  };

  return (
    <div className=" fixed w-full bg-[#eee] z-20 py-7 top-0 px-2">
      <Title text={titleText} color={titleColor} />
      <div className="flex justify-center sm:flex-row flex-col items-center mt-12 sm:gap-10 gap-4">
        <Question
          value={question}
          onKeyDown={handleSendPress}
          onChange={handleInputChange}
        />
        <ResultButton text={buttonText} onClick={handleSendClick} />
      </div>
    </div>
  );
};

export default UserAction;
