import {ConversationalRetrievalQAChain, RetrievalQAChain, VectorDBQAChain} from "langchain/chains";
import {getOrCreateHnswStore, loadAndProcessDocuments} from "./document_processor.js";
import { model } from "./openAI_model.js";
import colors from "colors";
import {getVectorStoreFromPinecone} from "./pinecone_connector.js";
import {VectorStoreRetriever} from "langchain/dist/vectorstores/base.js";

export async function llmSetup(directoryPath) {
  console.log(colors.red("Loading and processing documents..."));
  const vectorStore = await loadAndProcessDocuments(directoryPath);
  console.log(colors.yellow("Vector store loaded and processed.\n\n"));

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );

  return chain;
}

export async function getPreloadedLLMSetup() {
  const vectorStore = await getOrCreateHnswStore();
  return ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {returnSourceDocuments: true}
  );
}
