import express from "express";
import bodyParser from "body-parser";
import {getPreloadedLLMSetup, llmSetup} from "./llm_setup.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: '*'
}));

const chainPromise = await getPreloadedLLMSetup();
// const chainPromise = await llmSetup("metamask_dev_docs/");


app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const chain = await chainPromise;
    const response = await chain.call({ question, chat_history: [] });
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
