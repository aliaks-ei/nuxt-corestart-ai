# Nuxt Corestart AI

A production-ready Nuxt 3 template with Supabase authentication and OpenAI integration.

## Features

- 🔐 **Authentication**: Magic link and Google OAuth with Supabase
- 🤖 **AI Chat**: Built-in OpenAI integration with streaming support
- 🎨 **Modern UI**: Beautiful components with Nuxt UI
- 🚀 **Production Ready**: TypeScript, ESLint, and best practices
- 📱 **Responsive**: Mobile-first design

## Setup

### 1. Install Dependencies

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your API keys:

```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Important**: 
- Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- The OpenAI API key is only used server-side and never exposed to the client
- Configure your Supabase project for authentication

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## AI Chat Features

The integrated AI Chat system provides:

- **Streaming Responses**: Real-time message display as the AI types
- **Customizable Parameters**: 
  - Temperature (0-2): Controls randomness of responses
  - Max Tokens (100-4000): Limits response length
- **Conversation History**: Maintains context throughout the chat session
- **Error Handling**: Graceful handling of API errors and network issues
- **Usage Tracking**: Displays token usage for cost monitoring

### Using the AI Chat

1. Sign in to your account
2. Navigate to "AI Chat" from the user menu
3. Adjust settings (temperature, max tokens, streaming mode) as needed
4. Type your message and press Ctrl+Enter (Cmd+Enter on Mac) or click "Send Message"
5. Watch the AI respond in real-time (if streaming is enabled)

## Security

- OpenAI API key is stored securely in environment variables
- API key is never exposed to client-side code
- All AI requests are processed server-side
- User authentication required for AI Chat access
