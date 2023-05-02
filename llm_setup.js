import { ConversationalRetrievalQAChain } from "langchain/chains";
import { loadAndProcessDocuments } from "./document_processor.js";
import { model } from "./openAI_model.js";

export async function llmSetup(directoryPath) {
  console.log("Loading and processing documents...");
  const vectorStore = await loadAndProcessDocuments(directoryPath);
  console.log("Vectore store loaded and processed.\n\n");

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );

  return chain;
}
