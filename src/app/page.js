"use client";

import React, { useState, useEffect } from "react";
import UserAction from "./components/molecules/UserAction.js";
import Result from "./components/organisms/Result.js";
import OpenAI from "openai";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loadingMessageId, setLoadingMessageId] = useState(null);

  useEffect(() => {
    const initialBotMessage = {
      role: "assistant",
      content: "Hello! How can I assist you today?",
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
      content: `you are common gpt.
      `,
    };
    const userMessage = {
      role: "user",
      content: question,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const loadingMessage = {
      role: "assistant",
      content: "loading-spinner",
      id: Date.now(),
    };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    setLoadingMessageId(loadingMessage.id);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [systemMessage, userMessage],
      });
      const data = completion.choices[0]?.message?.content;
      const botMessage = {
        content: data,
        role: '"assistant"',
      };
      setMessages((prevMessages) => {
        return prevMessages.map((message) =>
          message.id === loadingMessageId
            ? { ...message, content: botMessage.content }
            : message
        );
      });
      setLoadingMessageId(null);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => {
        return prevMessages.map((message) =>
          message.id === loadingMessageId
            ? { ...message, content: "Sorry, there was an error." }
            : message
        );
      });
      setLoadingMessageId(null);
    }
  };
  console.log(messages);
  console.log(loadingMessageId);
  return (
    <div className=" w-full">
      <UserAction
        titleText="Alexandru Chatbot"
        titleColor="#000"
        buttonText="Send"
        onButtonClick={handleQuestionSubmit}
      />
      <div className="flex justify-center w-full">
        <div className=" sm:mt-[200px] mt-[250px] mb-10 w-full max-w-[850px] px-2">
          <Result loading={loadingMessageId} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Home;
