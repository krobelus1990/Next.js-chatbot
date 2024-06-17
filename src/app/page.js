"use client";

import React, { useState, useEffect } from "react";
import UserAction from "./components/molecules/UserAction.js";
import Result from "./components/organisms/Result.js";
import userAvatar from "../assets/UNYJK-180x180.png";
import botAvatar from "../assets/photo_2024-03-26_01-54-28.jpg";
import { getResponse } from "./api/openAI/route.js";

const Home = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const initialBotMessage = {
      role: "assistant",
      content: "Hello! How can I assist you today?",
      avatar: { botAvatar },
    };
    setMessages([initialBotMessage]);
  }, []);
  const handleQuestionSubmit = async (question) => {
    const userMessage = {
      role: "user",
      content: question,
      avatar: { userAvatar },
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const rdata = await getResponse({ question: question });
      const data = rdata.choices[0]?.message?.content;
      const botMessage = {
        content: data,
        role: '"assistant"',
        avatar: { botAvatar },
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="">
      <div className="">
        <UserAction
          titleText="Resoultion ChatGPT"
          titleColor="#fff"
          buttonText="Send"
          onButtonClick={handleQuestionSubmit}
        />
      </div>
      <div className=" px-96 mt-[200px] mb-10">
        <Result
          messages={messages}
          botAvatar={botAvatar}
          userAvatar={userAvatar}
        />
      </div>
    </div>
  );
};

export default Home;
