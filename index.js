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

    const vectorStore = await loadAndProcessDocuments("sdk_docs/");

    // Cache the vectorStore
    const retriever = vectorStore.asRetriever();

    const chain = ConversationalRetrievalQAChain.fromLLM(model, retriever);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Use rl.questionAsync() instead of util.promisify(rl.question)
    rl.questionAsync = function (question) {
      return new Promise((resolve) => {
        rl.question(question, resolve);
      });
    };

    const chatHistory = [];

    while (true) {
      const userQuestion = await rl.questionAsync(
        "Enter your question or type 'exit' to quit: "
      );

      if (userQuestion.toLowerCase() === "exit") {
        break;
      }

      const res = await chain.call({
        question: userQuestion,
        chat_history: chatHistory,
      });

      const answer = res.text.trim();
      chatHistory.push(`${userQuestion} ${answer}`);

      console.log(`Q: ${userQuestion}`);
      console.log(`A: ${answer}\n\n`);
    }

    rl.close();
  } catch (error) {
    console.error(error);
  }
}

main();
