import React from "react";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";

const UserQuestion = ({ avatarUrl, questionText }) => (
  // <div className='user-question'>
  //     <Avatar imageUrl={avatarUrl} />
  //     <Text content={questionText} />
  // </div>
  <div>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar imageUrl={avatarUrl} />
        </div>
      </div>
      <div className="chat-bubble chat-bubble-primary">
        <Text content={questionText} />
      </div>
    </div>
    
  </div>
);

export default UserQuestion;
