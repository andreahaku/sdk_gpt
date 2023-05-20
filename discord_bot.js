import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import { initializeChain, initializeChatHistory, getAnswer } from "./shared.js";

dotenv.config();

const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Use a Map object to store chat history for each user
const chatHistoryMap = new Map();
let chain;

// Initialize the chain when the bot starts
(async function () {
  const knowledgeBasePath = "./metamask_zendesk_kb";
  chain = await initializeChain(knowledgeBasePath);
})();

const sendMessage = (message, response) => {
  try {
    message.reply(response);
  } catch (error) {
    console.log(error);
  }
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const content = message.content.trim();
  const authorId = message.author.id;

  try {
    // Use switch statement to handle different commands
    switch (content) {
      case "!help":
        sendMessage(
          message,
          "Type !askMM <your question> to ask a question about the MetaMask SDK."
        );
        break;

      case "!about":
        sendMessage(
          message,
          "I'm a bot that can answer questions about the MetaMask clients (Extension and Mobile app)."
        );
        break;

      default:
        if (!content.startsWith("!askMM ")) return;

        const question = content.slice(7).trim();

        try {
          // Get the chat history for this user
          const chatHistory =
            chatHistoryMap.get(authorId) || initializeChatHistory();

          const topic = "MetaMask Zendesk KB";
          const answer = await getAnswer(chain, chatHistory, topic, question);

          // Add the question+answer string to the user's chat history
          chatHistory.push(`${question} ${answer}`);
          chatHistoryMap.set(authorId, chatHistory);

          sendMessage(message, answer);
        } catch (error) {
          console.error(error);
          sendMessage(
            message,
            "Oops! Something went wrong. Please try again later or contact the bot developer."
          );
        }
    }
  } catch (error) {
    console.log(error);
  }
});

client.login(DISCORD_BOT_TOKEN);
