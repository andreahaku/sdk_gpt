import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import readline from "readline";
import util from "util";
import { model } from "./openAI_model.js";
import { llmSetup } from "./llm_setup.js";
import colors from "colors";

async function main() {
  try {
    const chain = await llmSetup("metamask_dev_docs");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const askQuestion = util.promisify(rl.question).bind(rl);

    const chatHistory = [];

    // Create a ChatPromptTemplate with system and human message templates
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate("{text}"),
      SystemMessagePromptTemplate.fromTemplate(
        "Make sure you give an extended and detailed answer. Provide code snippets every time it's possible and makes sense to do so. Also, please respond using the very same language as the question. Format your answer as `Markdown`."
      ),
    ]);

    for (;;) {
      const userQuestion = await askQuestion(
        "Enter your question or type 'exit' to quit: "
      );

      if (userQuestion.toLowerCase() === "exit") {
        break;
      }

      // Format the chatPrompt with the user's question and the topic
      const formattedPrompt = await chatPrompt.format({
        topic: "MetaMask Developers documentation",
        text: userQuestion,
      });

      const res = await chain.call({
        question: formattedPrompt,
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
