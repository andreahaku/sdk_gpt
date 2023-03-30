import { OpenAI } from "langchain/llms";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import dotenv from "dotenv";
import { loadAndProcessDocuments } from "./documentProcessor.js";
import readline from "readline";

dotenv.config();

const { OPENAI_API_KEY } = process.env;

async function main() {
  try {
    const model = new OpenAI({
      openAIApiKey: OPENAI_API_KEY,
      temperature: 0.9,
      maxTokens: 2500,
    });

  let vectorStore;
  try {
    vectorStore = await loadAndProcessDocuments("metamask_docs/");
  } catch (error) {
    console.error(`Error loading and processing documents: ${error.message}`);
    return;
  }

  const retriever = vectorStore.asRetriever();
  const chain = ConversationalRetrievalQAChain.fromLLM(model, retriever);

  const questions = [
    "How can I install MetaMask SDK on iOS?",
    "Where can I get support?",
    "What about React Native?",
    "Which platform does the Unity SDK support?",
    "Which dependencies does the Unity SDK have?",
    "Is there a Discord server?",
    "What are the plans for future development?",
    "What is the MetaMask SDK?",
    "How do you import the MetaMask SDK?",
    "How can users connect the MetaMask SDK to their wallet?",
    "Can the MetaMask SDK be used with a variety of web frameworks?",
    "How do you install the MetaMask SDK?",
    "What is the proper way of instantiating the MetaMask SDK?",
    "What are the possible options when instantiating the MetaMask SDK?",
    "What should be called first to make the SDK render the QR code on the console?",
    "What is the Ethereum Provider API?",
    "How can you view a NodeJS app example of the MetaMask SDK?",
  ];

  const chatHistory = [];

  for (const question of questions) {
    const res = await chain.call({ question, chat_history: chatHistory });
    const answer = res.text.trim();
    chatHistory.push(`${question} ${answer}`);

    console.log(`Q: ${question}`);
    console.log(`A: ${answer}\n`);
  }
}

main();
