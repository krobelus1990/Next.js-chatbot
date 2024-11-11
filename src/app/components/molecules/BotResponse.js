import React from "react";
import Text from "../atoms/botText";

const BotResponse = ({ responseText }) => (
  <div className="chat chat-end">
    <Text content={responseText} />
  </div>
);

export default BotResponse;
