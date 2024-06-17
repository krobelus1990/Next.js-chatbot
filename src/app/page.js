"use client";

import React, { useState, useEffect } from "react";
import UserAction from "./components/molecules/UserAction.js";
import Result from "./components/organisms/Result.js";
import userAvatar from "../assets/UNYJK-180x180.png";
import botAvatar from "../assets/photo_2024-03-26_01-54-28.jpg";
import OpenAI from "openai";

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
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });
    const systemMessage = {
      role: "system",
      content: `From now on your name is Resolution, male, an your birthday is 2000.09.30
      Respond with much Imoticons. And your girlfrind is ksg.
      `,
    };
    const userMessage = {
      role: "user",
      content: question,
      avatar: { userAvatar },
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [systemMessage, userMessage],
      });
      console.log(completion);

      const data = completion.choices[0]?.message?.content;
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
