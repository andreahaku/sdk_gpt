import readline from "readline";
import util from "util";
import colors from "colors";
import { initializeChain, initializeChatHistory, getAnswer } from "./shared.js";

async function main() {
  try {
    const knowledgeBasePath = "./metamask_dev_docs";
    const chain = await initializeChain(knowledgeBasePath);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const askQuestion = util.promisify(rl.question).bind(rl);

    const chatHistory = initializeChatHistory();

    for (;;) {
      const userQuestion = await askQuestion(
        "Enter your question or type 'exit' to quit: "
      );

      if (userQuestion.toLowerCase() === "exit") {
        break;
      }

      const topic = "MetaMask Developers documentation";
      const answer = await getAnswer(chain, chatHistory, topic, userQuestion);

      chatHistory.push(`${userQuestion} ${answer}`);

      console.log(colors.bold.bgGreen(`\nQ: ${userQuestion}`));
      console.log(colors.brightWhite(`A: ${answer}\n\n`));
    }

    rl.close();
  } catch (error) {
    console.error(error);
  }
}

main();
