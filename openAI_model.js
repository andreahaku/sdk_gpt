import { OpenAI } from "langchain/llms";
import dotenv from "dotenv";

dotenv.config();

const { OPENAI_API_KEY } = process.env;

export const model = new OpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "text-davinci-003",
  temperature: 0.9,
  maxTokens: 2500,
});
