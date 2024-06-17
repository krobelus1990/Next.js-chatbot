// src/components/organisms/Result.js
import React from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';

const Result = ({ messages, userAvatar, botAvatar }) => (
    <div>
        {messages.map((message, index) => (
            message.role === 'user' ? (
                <UserQuestion key={index} avatarUrl={userAvatar} questionText={message.content} />
            ) : (
                <BotResponse key={index} avatarUrl={botAvatar} responseText={message.content} />
            )
        ))}
    </div>
);

export default Result;
