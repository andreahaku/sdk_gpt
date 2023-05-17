import readline from "readline";
import util from "util";
import { model } from "./openAI_model.js";
import { llmSetup } from "./llm_setup.js";
import colors from "colors";

async function main() {
  try {
    const chain = await llmSetup("metamask_dev_docs");
    // const chain = await llmSetup("metamask_zendesk_kb/");
    // const chain = await llmSetup("create-react-app/src/");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Use util.promisify to convert rl.question into a function that returns a Promise
    const askQuestion = util.promisify(rl.question).bind(rl);

    const chatHistory = [];

    for (;;) {
      const userQuestion = await askQuestion(
        "Enter your question or type 'exit' to quit: "
      );

      if (userQuestion.toLowerCase() === "exit") {
        break;
      }

      const res = await chain.call({
        question:
          userQuestion +
          "\n Please respond using the very same language as the question I just asked.",
        chat_history: chatHistory,
      });

      const answer = res.text.trim();

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
