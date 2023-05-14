import { llmSetup } from "./llm_setup.js";
import colors from "colors";
import {getOrCreateHnswStore} from "./document_processor.js";

async function main() {
  const chain = await llmSetup("metamask_dev_docs/");

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

  const chatHistory = [];

  for (const question of questions) {
    const res = await chain.call({
      question,
      chat_history: chatHistory,
    });
    const answer = res.text.trim();
    chatHistory.push(`${question} ${answer}`);

    console.log(colors.bold.green(`Q: ${question}`));
    console.log(colors.brightWhite(`A: ${answer}\n`));
  }
}

// async function main() {
//   console.log("Start");
//   const docs = await getOrCreateHnswStore();
//
//   console.log("End");
// }

main().catch((error) => console.error(error));
