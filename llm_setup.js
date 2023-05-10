import { ConversationalRetrievalQAChain } from "langchain/chains";
import { loadAndProcessDocuments } from "./document_processor.js";
import { model } from "./openAI_model.js";
import colors from "colors";
import {getVectorStoreFromPinecone} from "./pinecone_connector.js";

export async function llmSetup(directoryPath) {
  console.log(colors.red("Loading and processing documents..."));
  const vectorStore = await loadAndProcessDocuments(directoryPath);
  console.log(colors.yellow("Vectore store loaded and processed.\n\n"));

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );

  return chain;
}

export async function getPreloadedLLMSetup() {
  const vectorStore = await getVectorStoreFromPinecone();

  return ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever()
  );
}
