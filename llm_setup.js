import {ConversationalRetrievalQAChain} from "langchain/chains";
import {getOrCreateHnswStore, loadAndProcessDocuments} from "./document_processor.js";
import { model } from "./openAI_model.js";
import colors from "colors";
import {PromptTemplate} from "langchain/prompts";

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
      {returnSourceDocuments: true, }
  );
}

export function getPrompt() {
  const template = "You are a helpful assistant who tries to answer questions with code snippet examples. Please answer the following question and always provide code snippets when possible: {question}";

  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["question"],
  })

  return prompt;
}

