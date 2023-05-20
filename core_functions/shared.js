// shared.js
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { llmSetup } from "./llm_setup.js";

// Create a ChatPromptTemplate with system and human message templates
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  HumanMessagePromptTemplate.fromTemplate("{text}"),
  SystemMessagePromptTemplate.fromTemplate(
    "Make sure you give an extended and detailed answer. Provide code snippets every time it's possible and makes sense to do so. Also, please respond using the very same language as the question. Format your answer as `Markdown`."
  ),
]);

export const initializeChain = async (knowledgeBasePath) => {
  const chain = await llmSetup(knowledgeBasePath);
  return chain;
};

export const initializeChatHistory = () => {
  const chatHistory = [];
  return chatHistory;
};

export const getAnswer = async (chain, chatHistory, topic, text) => {
  const formattedPrompt = await chatPrompt.format({
    topic,
    text,
  });

  const res = await chain.call({
    question: formattedPrompt,
    chat_history: chatHistory,
  });

  const answer = res.text.trim();
  return answer;
};
