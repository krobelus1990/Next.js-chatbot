import React from "react";
import Text from "../atoms/userText";

const UserQuestion = ({ questionText }) => (
  <div className="chat chat-start">
    <Text content={questionText} />
  </div>
);

export default UserQuestion;
