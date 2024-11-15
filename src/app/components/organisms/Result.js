import React from "react";
import UserQuestion from "../molecules/UserQuestion";
import BotResponse from "../molecules/BotResponse";

const Result = ({ messages }) => (
  <div>
    {messages.map((message, index) =>
      message.role === "user" ? (
        <UserQuestion key={index} questionText={message.content} />
      ) : (
        <BotResponse key={index} responseText={message.content} />
      )
    )}
  </div>
);

export default Result;
