import {DirectoryLoader, GithubRepoLoader, TextLoader} from "langchain/document_loaders";
import {MarkdownTextSplitter} from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import * as fs from "fs";
import * as path from "path";

// const HNSWLIB_PATH = './hnsw_github_mm';
const HNSWLIB_PATH = './hnswlibstore';
// const HNSWLIB_PATH = './hnsw_local_github_mm';

const MMDOCS_PATH="metamask_dev_docs/";
const MANUAL_PATH="./manual"


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
    // vectorStore = await createHNSWStoreFromMMGithub();
    vectorStore = await loadFromMMDocsHierarchical()


    await vectorStore.save(HNSWLIB_PATH);
  }

  return vectorStore;
}

export async function fakeMapFromManualFolder() {
  const fileMap = new Map();
  // const files = readFilesFromFolder(MANUAL_PATH);
  const files = readFilesFromFolderSync(MANUAL_PATH);


  files.forEach((file) => {
    if (!file.startsWith('.')) {
      const filename = getFileNameWithoutExtension(file);

      hackTogetherSourceByName(file, filename, fileMap);
    }
  });

  return fileMap;
}

function getFileNameWithoutExtension(fileString) {
  const nameArray = fileString.split('/');
  let documentName;
  if (nameArray && nameArray.length > 1) {
    // If we want to remove additional extensions they need to be included here
    documentName = nameArray[nameArray.length - 1].replace(/\.(md|html|ts|js)$/, '');
  }

  return documentName;
}

function hackTogetherSourceByName(path, keyName, map) {
  const nameArray = path.split('manual/');
  const mainSource = "https://github.com/MetaMask/metamask-docs/tree/";
  let link = `${mainSource}${nameArray[1]}`;
  map.set(keyName, link);
}

function readFilesFromFolderSync(folderPath) {
  const fileNames = [];


  function traverseDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        fileNames.push(filePath);
      } else if (stat.isDirectory()) {
        traverseDirectory(filePath);
      }
    });
  }

  traverseDirectory(folderPath);

  return fileNames;
}

export async function loadFromMMDocsHierarchical() {
  const location = "manual"

  const docs = await splitDocuments(location);
  return await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

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

  const splitDocumentsForGithub = async (documentLoader, path) => {
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

  await Promise.all(documents.map(d => splitDocumentsForGithub(d, inputUrl)));

  return allDocuments;
}

export async function splitDocuments(directoryPath) {
  const directoryLoader = new DirectoryLoader(directoryPath, {
    ".md": (path) => new TextLoader(path),
    ".js": (path) => new TextLoader(path),
    ".ts": (path) => new TextLoader(path),
  }, true);

  const documentLoaders = await directoryLoader.load();
  if (documentLoaders.length === 0) {
    throw new Error('There are no documents in the provided directory!');
  }

  const markdownSplitter = new MarkdownTextSplitter();
  const allDocuments = [];
  const mainSource = "https://github.com/MetaMask/metamask-docs/tree/";

  const splitDocumentsWithLocalLoader = async (documentLoader) => {
    const text = documentLoader.pageContent;

    // use file name as context
    const nameArray = documentLoader.metadata.source.split('/manual/');
    let documentName = `${mainSource}${nameArray[1]}`;

    const documents = await markdownSplitter.createDocuments([text], [{
      source: documentName,
    }]);
    allDocuments.push(...documents);
  };

  await Promise.all(documentLoaders.map(splitDocumentsWithLocalLoader));

  return allDocuments;
}

const splitDocumentsWithGithubLoader = async (documentLoader, allDocuments) => {
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



