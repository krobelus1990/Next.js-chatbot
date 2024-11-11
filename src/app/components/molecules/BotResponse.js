import React from "react";
import Text from "../atoms/botText";

const BotResponse = ({ responseText, loading }) => (
  <div className="chat chat-end">
    <Text loading={loading} content={responseText} />
  </div>
);

export default BotResponse;
