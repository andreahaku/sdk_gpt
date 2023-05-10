# Language Model Document Retriever (MetaMask developers and Zendesk knowledge base tests)

This repository contains a Node.js application that uses OpenAI's GPT-3.5 and GPT-4 based model to answer questions related to a set of documents. Specifically the MetaMask SDK documentation.

The application first processes the documents, creating a vector store for efficient retrieval, and then provides an interactive prompt for users to ask questions.

## Features

- Load and process documents from a specified directory.
- Split documents into chunks using Markdown text splitter.
- Create a vector store for efficient document retrieval.
- Use OpenAI's GPT-3.5/4 based model to answer questions.
- Provide an interactive prompt for users to ask questions.
- Provide an REST API.
- Provide an Discord bot.

## Prerequisites

- Node.js v16.x.x or higher

## Setup

1. Clone the repository:

```bash
git clone https://github.com/andreahaku/sdk_gpt.git
cd sdk_gpt
```

2. Install the required dependencies:

```bash
yarn
```

3. Create a .env file in the project root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Replace your_openai_api_key_here with your actual OpenAI API key.

## Usage

Add your documents (in Markdown format) to the sdk_docs directory.

### Run the application (test questions)

```
yarn start
```

### Run the application (interactive)

```
yarn start:interactive
```

An interactive prompt will appear, allowing you to ask questions related to the documents:

```
Enter your question or type 'exit' to quit:
```

Type your question and press Enter. The application will provide an answer based on the processed documents. To exit the interactive prompt, type `exit` and press Enter.

### Run as REST API server

```
yarn start:server
```

The server will start and listen for incoming requests on port 3000 (or the port specified in the PORT environment variable).

To interact with the API, use any HTTP client, such as Postman, Insomnia, or a simple command-line tool like curl. You can also use a library like axios or fetch in JavaScript to make requests from another application.
The API has a single endpoint /ask that accepts POST requests containing a JSON payload with the question. Here's an example of how to send a request to the API using curl:

```
curl --request POST \
  --url http://localhost:3000/ask \
  --header 'Content-Type: application/json' \
  --data '{
    "question": "How can I install MetaMask SDK on iOS?"
  }'
```

that sends an answer similar to:

```
{"question":"How can I install MetaMask SDK on iOS?","answer":"To install MetaMask SDK on iOS, you will need to add it as a cocoapods dependency to your project by adding this entry in your Podfile: `pod 'metamask-ios-sdk'` and then running `pod install`. You can also add MetaMask iOS SDK as an SPM package to your project using the repository url: https://github.com/MetaMask/metamask-ios-sdk. Finally, you need to run the postinstall script: `yarn postinstall`, and then install the necessary pods that came with the library: `cd ios && pod install && cd ..`."}
```

### Run as Discord bot

1. Create your bot on the Discord Developer Portal:
   - Go to the Discord Developer Portal: <https://discord.com/developers/applications>.
   - Sign in with your Discord account.
   - Click "New Application" and provide a name for your bot.
   - Navigate to the "Bot" tab on the left side and click "Add Bot."
   - On the bot page, you'll find the bot's token. Keep it secret, as it's used to authenticate your bot.
2. Run your bot:
   - In your terminal or command prompt, run node index.js to start your bot. If everything is set up correctly, you should see a message saying "Logged in as [bot-username]!".
3. Invite your bot to a server:
   - To invite the bot to a server, you'll need to create an invite link. Replace YOUR_CLIENT_ID with the client ID found on the "General Information" page of your bot's application on the Discord Developer Portal:
   - Paste the following link into your browser and follow the instructions:

     ```
     https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=3072
     ```

## Running the Docker Image

This repository uses GitHub Actions to automatically build and push Docker images to GitHub Packages upon every push to the `main` or `hackathon` branch. You can use these images to run the application without having to set up a local development environment.

### Prerequisites

- Docker

### Setup

1. Pull the Docker image from GitHub Packages:

```bash
docker pull ghcr.io/andreahaku/sdk_gpt:hackathon
```

2. Create a .env file with your environment variables:

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DISCORD_BOT_TOKEN=xxxxxxx
PINECONE_ENVIRONMENT=some-region
PINECONE_API_KEY=xxxxxxx
```

3. Run the Docker image:

```bash
docker run --env-file .env -p 3000:3000 ghcr.io/andreahaku/sdk_gpt:hackathon
```

4. The application will be available at <http://localhost:3000>. Here's an example of how to send a request to the API using curl:

```
curl --request POST \
  --url http://localhost:3000/ask \
  --header 'Content-Type: application/json' \
  --data '{
    "question": "How can I install MetaMask SDK on iOS?"
  }'
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## P.S

This README.md has been almost completely generated by GPT-4 ;)
