import React from "react";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";

const BotResponse = ({ avatarUrl, responseText }) => (
  <div className="">
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar imageUrl={avatarUrl} />
        </div>
      </div>
      <div className="chat-bubble chat-bubble-accent">
        <Text content={responseText} />
      </div>
    </div>
  </div>
);

export default BotResponse;
