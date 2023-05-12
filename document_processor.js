import { DirectoryLoader, TextLoader } from "langchain/document_loaders";
import { MarkdownTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import * as fs from "fs";

const HNSWLIB_PATH = './hnswlibstore';
const MMDOCS_PATH="metamask_dev_docs/";

export async function loadAndProcessDocuments(directoryPath) {
  try {
    const allDocuments = await splitDocuments(directoryPath);

    const vectorStore = await HNSWLib.fromDocuments(
      allDocuments,
      new OpenAIEmbeddings()
    );

    return vectorStore;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while loading and processing documents."
    );
  }
}

export async function getOrCreateHnswStore() {
  let vectorStore;
  if (fs.existsSync(HNSWLIB_PATH)) {
    // load docs from store if available
    vectorStore = await HNSWLib.load(HNSWLIB_PATH, new OpenAIEmbeddings());
  } else {
    // create the docs and store them for the first time
    vectorStore = await loadAndProcessDocuments(MMDOCS_PATH);
    await vectorStore.save(HNSWLIB_PATH);
  }

  return vectorStore;
}

export async function splitDocuments(directoryPath) {
  const directoryLoader = new DirectoryLoader(directoryPath, {
    ".md": (path) => new TextLoader(path),
    ".js": (path) => new TextLoader(path),
    ".ts": (path) => new TextLoader(path),
  });

  const documentLoaders = await directoryLoader.load();
  if (documentLoaders.length === 0) {
    throw new Error('There are no documents in the provided directory!');
  }

  const markdownSplitter = new MarkdownTextSplitter();
  const allDocuments = [];

  const splitDocuments = async (documentLoader) => {
    const text = documentLoader.pageContent;

    // use file name as context
    const nameArray = documentLoader.metadata.source.split('/');
    let documentName;
    if (nameArray && nameArray.length > 1) {
      // If we want to remove additional extensions they need to be included here
      documentName = nameArray[nameArray.length - 1].replace(/\.(md|html|ts|js)$/, '');
    }

    const documents = await markdownSplitter.createDocuments([text], [{
      source: documentName,
    }]);
    allDocuments.push(...documents);
  };

  await Promise.all(documentLoaders.map(splitDocuments));

  return allDocuments;
}
