import colors from "colors";
import { initializeChain, initializeChatHistory, getAnswer } from "./shared.js";

async function main() {
  const knowledgeBasePath = "./metamask_dev_docs";
  const chain = await initializeChain(knowledgeBasePath);

  const questions = [
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

  const chatHistory = initializeChatHistory();

  const topic = "MetaMask Developers documentation";
  for (const question of questions) {
    const answer = await getAnswer(chain, chatHistory, topic, question);
    chatHistory.push(`${question} ${answer}`);

    console.log(colors.bold.bgGreen(`Q: ${question.toUpperCase()}`));
    console.log(colors.brightWhite(`A: ${answer}\n`));
  }
}

main().catch((error) => console.error(error));
