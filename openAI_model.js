import { OpenAI } from "langchain/llms";
import dotenv from "dotenv";

dotenv.config();

const { OPENAI_API_KEY } = process.env;

export const model = new OpenAI({
  openAIApiKey: OPENAI_API_KEY,
  // modelName: "text-davinci-003", // GPT-3.5 - max 4097 tokens
  modelName: "gpt-3.5-turbo", // GPT-3.5 - max 4097 tokens
  // modelName: "gpt-4", // GPT-4 - max 8192 tokens
  temperature: 0,
  maxTokens: 2500,
  // prompt:"" // This is the prompt that will be used for all calls to the model. You can add "personalities" here if you want to use them.
});
