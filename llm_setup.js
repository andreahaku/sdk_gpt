import { ConversationalRetrievalQAChain } from "langchain/chains";
import { loadAndProcessDocuments } from "./document_processor.js";

export async function llmSetup(directoryPath) {
  const vectorStore = await loadAndProcessDocuments(directoryPath);
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );

  return chain;
}
