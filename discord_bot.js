import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import { model } from "./openAI_model.js";
import { llmSetup } from "./llm_setup.js";

dotenv.config();

const { DISCORD_BOT_TOKEN } = process.env;

const chainPromise = await llmSetup("metamask_zendesk_kb/");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Use a Map object to store chat history for each user
const chatHistory = new Map();

const sendMessage = (message) => {
  try {
    message.reply(message);
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

  try {
    // Use switch statement to handle different commands
    switch (content) {
      case "!help":
        sendMessage(
          "Type !askMM <your question> to ask a question about the MetaMask SDK."
        );
        break;

      case "!about":
        sendMessage(
          "I'm a bot that can answer questions about the MetaMask SDK."
        );
        break;

      default:
        if (!content.startsWith("!askMM ")) return;

        const question = content.slice(7).trim();
        const authorId = message.author.id;

        try {
          // Get the chat history for this user
          const userChatHistory = chatHistory.get(authorId) || [];

          const chain = await chainPromise;
          const response = await chain.call({
            question,
            chat_history: userChatHistory,
          });
          const answer = response.text.trim();

          // Add the question+answer string to the user's chat history
          chatHistory.set(authorId, [
            ...userChatHistory,
            `${question} ${answer}`,
          ]);

          sendMessage(answer);
        } catch (error) {
          console.error(error);
          sendMessage(
            "Oops! Something went wrong. Please try again later or contact the bot developer."
          );
        }
    }
  } catch (error) {
    console.log(error);
  }
});

client.login(DISCORD_BOT_TOKEN);