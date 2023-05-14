import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import {getPreloadedLLMSetup, getPrompt} from "./llm_setup.js";

dotenv.config();

const { DISCORD_BOT_TOKEN } = process.env;

const chainPromise = await getPreloadedLLMSetup();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Use a Map object to store chat history for each user
const chatHistory = new Map();

// Sends a message to the same channel where the message was sent to
const sendMessage = (message, messageContent) => {
  try {
    if (messageContent) {
      message.channel.send(messageContent);
    } else {
      console.error(`No content generated as response for ${message.id}: ${message.content.trim()}} by author ${message.author}`)
    }
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
            message,
          "Type !askMM <your question> to ask a question about the MetaMask SDK."
        );
        break;

      case "!about":
        sendMessage(
            message,
          "I'm a bot that can answer questions about the MetaMask SDK."
        );
        break;

      default:
        if (!content.startsWith("!askMM")) return;

        const question = content.slice(7).trim();
        const authorId = message.author.id;
        let isTyping = true;
        await message.channel.sendTyping();

        try {
          // Get the chat history for this user
          const userChatHistory = chatHistory.get(authorId) || [];

          // const promptTemplate = "You are an expert in MetaMask documentation. Make sure you give an extended and detailed answer. Provide code snippets every time it's possible and makes sense to do so.";
          const promptTemplate = "You are an expert in MetaMask documentation. Please answer the following questions if you know the answer give a precise and detailed answer. If you don't know the answer say that you don't know. Provide code snippets every time when possible.";

          const msg = `${promptTemplate} \n ${question}`

          const chain = await chainPromise;
          const response = await chain.call({
            question: msg,
            chat_history: userChatHistory,
          });
          const answer = response.text.trim();

          // Add the question+answer string to the user's chat history
          chatHistory.set(authorId, [
            ...userChatHistory,
            `${question} ${answer}`,
          ]);

          sendMessage(message, answer);
        } catch (error) {
          console.error(error);
          sendMessage(message,
            "Oops! Something went wrong. Please try again later or contact the bot developer."
          );
        } finally {
          isTyping = false;
        }
    }
  } catch (error) {
    console.log(error);
  }
});

try {
  await client.login(DISCORD_BOT_TOKEN);
} catch (e) {
  console.error(e);
}

async function sendMessageTyping(message, shouldType) {
  if (shouldType) {
    await message.channel.sendTyping();
    setTimeout(() => sendMessageTyping(message, shouldType), 10000);
  }
}
