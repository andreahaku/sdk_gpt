import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import express from "express";
import bodyParser from "body-parser";
import { model } from "./openAI_model.js";
import { llmSetup } from "./llm_setup.js";

const app = express();
app.use(bodyParser.json());

// Initialize the chain
const chainPromise = llmSetup("metamask_dev_docs/");

// Create a ChatPromptTemplate with system and human message templates
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  HumanMessagePromptTemplate.fromTemplate("{text}"),
  SystemMessagePromptTemplate.fromTemplate(
    "Make sure you give an extended and detailed answer. Provide code snippets every time it's possible and makes sense to do so. Also, please respond using the very same language as the question. Format your answer as `Markdown`."
  ),
]);

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    // Format the chatPrompt with the user's question
    const formattedPrompt = await chatPrompt.format({
      topic: "MetaMask Developers documentation",
      text: question,
    });

    const chain = await chainPromise;
    const response = await chain.call({
      question: formattedPrompt,
      chat_history: [],
    });
    const answer = response.text.trim();

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
