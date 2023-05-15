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
  const template = "You are an expert in MetaMask documentation. Make sure you give an extended and detailed answer. Provide code snippets every time it's possible and makes sense to do so. Also, please respond using the very same language as the question I just asked. The question is: {question}";

  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["question"],
  })

  return prompt;
}

