import express from "express";
import bodyParser from "body-parser";
import {getPreloadedLLMSetup, getPrompt} from "./llm_setup.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const statusMessage = `Server is running on port ${PORT}`;

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: '*'
}));

const chainPromise = await getPreloadedLLMSetup();

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const promptTemplate = "You are an expert in MetaMask documentation. Please answer the following question if you know the answer give a precise and detailed answer. If you don't know the answer say that you don't know. Provide code snippets every time when possible.";

    const msg = `${promptTemplate} \n ${question}`

    const response = await chainPromise.call({ question: msg, chat_history: [], });
    const answer = response.text.trim();
    const allSources = response.sourceDocuments.map(s => s.metadata?.source);
    const sources = [...new Set(allSources)];

    res.json({ question, answer, sources });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the question" });
  }
});

app.get('/status', (req, res) => {
  try {
    res.status(200).send(statusMessage);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(PORT, () => {
  console.log(statusMessage);
});
