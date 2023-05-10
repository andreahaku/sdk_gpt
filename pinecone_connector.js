import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings";
import {loadAndProcessDocuments, splitDocuments} from "./document_processor.js";
import {PineconeStore} from "langchain/vectorstores";

const HACKATHON_INDEX = "hackathon";
const { PINECONE_ENVIRONMENT, PINECONE_API_KEY, OPENAI_API_KEY } = process.env;

export async function getPineconeClient() {
  const pinecone = new PineconeClient();

  await pinecone.init({
    environment: PINECONE_ENVIRONMENT,
    apiKey: PINECONE_API_KEY,
  });
  return pinecone;
}

/**
 * Loads the initial set of documents into a Pinecone database. This function initialises
 * the vector DB and should be done only once.
 * @param directoryPath The path to the documents
 */
export default async function initialLoadOfPineconeDb(directoryPath) {
  const allDocuments = await splitDocuments(directoryPath);
  const embeddings = new OpenAIEmbeddings({openAIApiKey: OPENAI_API_KEY});

  const pinecone = await getPineconeClient();
  const index = pinecone.Index(HACKATHON_INDEX);

  try {
      await PineconeStore.fromDocuments(allDocuments, embeddings,
          {pineconeIndex: index, namespace: 'hackathon'});
  } catch (e) {
      console.log(`Error during loading embeddings into Pinecone: ${e}`);
  }
}

const sliceIntoChunks = (vectorArray, chunkSize) => {
    const res = [];
    for (let i = 0; i < vectorArray.length; i += chunkSize) {
        const chunk = vectorArray.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};
