import express from "express";
import bodyParser from "body-parser";
import {
  initializeChain,
  initializeChatHistory,
  getAnswer,
} from "./core_functions/shared.js";

const app = express();
app.use(bodyParser.json());

let chain;
let chatHistory;

// Initialize the chain and chat history when the server starts
(async function () {
  const knowledgeBasePath = "./metamask_dev_docs"; // Set this path accordingly
  chain = await initializeChain(knowledgeBasePath);
  chatHistory = initializeChatHistory();
})();

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const topic = "MetaMask Developers documentation";
    const answer = await getAnswer(chain, chatHistory, topic, question);

    // Update the chat history
    chatHistory.push({ question, answer });

    res.json({ question, answer });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the question" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
