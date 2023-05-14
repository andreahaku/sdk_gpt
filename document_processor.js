import {DirectoryLoader, GithubRepoLoader, TextLoader} from "langchain/document_loaders";
import {MarkdownTextSplitter} from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import * as fs from "fs";

const HNSWLIB_PATH = './hnsw_github_mm';
// const HNSWLIB_PATH = './hnswlibstore';
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

// Coded this to work with the provided examples exactly. If other folder is used the nesting in readDocumentationFromMetamaskGithub needs to
// be adjusted.
export async function getOrCreateHnswStore() {
  let vectorStore;
  if (fs.existsSync(HNSWLIB_PATH)) {
    // load docs from store if available
    vectorStore = await HNSWLib.load(HNSWLIB_PATH, new OpenAIEmbeddings());
  } else {
    // create the docs and store them for the first time
    vectorStore = await createHNSWStoreFromMMGithub()

    await vectorStore.save(HNSWLIB_PATH);
  }

  return vectorStore;
}

export async function createHNSWStoreFromMMGithub() {
  const DOC_URLS = ["https://github.com/MetaMask/metamask-docs/tree/main/snaps/",
    "https://github.com/MetaMask/metamask-docs/tree/main/wallet/"
  ];
  const allDocuments = [];
  for (let i = 0; i < DOC_URLS.length; i++) {
    const docs = await readDocumentationFromMetamaskGithub(DOC_URLS[i]);
    allDocuments.push(...docs);
  }
  return await HNSWLib.fromDocuments(allDocuments, new OpenAIEmbeddings());
}

export async function readDocumentationFromMetamaskGithub(inputUrl) {

  const loader = new GithubRepoLoader(
      inputUrl,
      { branch: "main", recursive: true, unknown: "warn",  },
  );
  const allDocuments = [];
  const markdownSplitter = new MarkdownTextSplitter({chunkSize: 600, chunkOverlap: 200});
  const documents = await loader.load();

  const splitDocuments = async (documentLoader, path) => {
    const text = documentLoader.pageContent;
    // specifically built for the use case of 2 main folders containing the markups. Needs to be configured
    // individually for other projects.
    const nameArray = documentLoader.metadata.source.split('/');
    nameArray.shift();
    const joined = nameArray.join('/');
    const sourceURL = `${path}${joined}`

    const documents = await markdownSplitter.createDocuments([text], [{
      source: sourceURL,
    }]);
    allDocuments.push(...documents);
  };

  await Promise.all(documents.map(d => splitDocuments(d, inputUrl)));

  return allDocuments;
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



