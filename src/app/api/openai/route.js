import OpenAI from "openai";

const getResponse = async (req) => {
  const question = req.question;
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const systemMessage = {
    role: "system",
    content: `From now on your name is Resolution
`,
  };
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      systemMessage,
      {
        role: "user",
        content: question,
      },
    ],
  });

  return response;
};

export { getResponse };
