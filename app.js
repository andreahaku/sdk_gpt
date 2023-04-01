import express from "express";
import bodyParser from "body-parser";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { loadAndProcessDocuments } from "./documentProcessor.js";
import { model } from "./openAI_model.js";

const app = express();
app.use(bodyParser.json());

async function setup() {
  const vectorStore = await loadAndProcessDocuments("metamask_dev_docs/");
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );

  return chain;
}

const chainPromise = setup();

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
