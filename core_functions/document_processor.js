import { DirectoryLoader, TextLoader } from "langchain/document_loaders";
import { MarkdownTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import colors from "colors";

export async function loadAndProcessDocuments(directoryPath) {
  try {
    const directoryLoader = new DirectoryLoader(directoryPath, {
      ".md": (path) => new TextLoader(path),
      ".js": (path) => new TextLoader(path),
      ".ts": (path) => new TextLoader(path),
    });

    const documentLoaders = await directoryLoader.load();
    const markdownSplitter = new MarkdownTextSplitter();
    const allDocuments = [];

    console.log(colors.cyan("- Splitting documents"));
    const splitDocuments = async (documentLoader) => {
      const text = documentLoader.pageContent;
      const documents = await markdownSplitter.createDocuments([text], {
        metadata: directoryPath,
      });
      allDocuments.push(...documents);
    };

    await Promise.all(documentLoaders.map(splitDocuments));

    console.log(colors.cyan("- Creating vector store"));
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
