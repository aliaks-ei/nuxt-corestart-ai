# 🚀 Nuxt Corestart AI

**A complete starter kit for building modern web applications with AI capabilities**

Welcome! This project is designed to help developers quickly build amazing web applications that combine user authentication, AI chat features, and modern web technologies. Whether you're a beginner or an experienced developer, this starter kit gives you everything you need to get up and running in minutes.

## 🎯 What Is This Project?

This is a **starter kit** (think of it as a foundation or template) that provides:
- A modern web application built with cutting-edge technologies
- User authentication (sign up, sign in, and user management)
- AI-powered chat functionality using OpenAI
- A beautiful, responsive user interface
- Everything pre-configured and ready to use

Perfect for developers who want to build AI-powered applications without starting from scratch!

## ✨ Features Already Built For You

This starter kit comes with these features ready to use:

- 🔐 **Complete User Authentication**
  - Magic link login (no passwords needed!)
  - Google OAuth integration
  - Secure user sessions and data protection

- 🤖 **AI Chat Integration**
  - Real-time streaming chat with OpenAI
  - Customizable AI settings (temperature, response length)
  - Chat history and context preservation
  - Token usage tracking

- 🎨 **Beautiful, Modern Interface**
  - Responsive design that works on all devices
  - Dark/light mode support
  - Professional UI components
  - Mobile-first approach

- 🚀 **Developer-Friendly Setup**
  - TypeScript for better code quality
  - ESLint for code consistency
  - Hot reload for instant development feedback
  - Production-ready build system

## 🛠 Technologies Used

This project uses modern, industry-standard technologies:

### Frontend Stack
- **[Nuxt 3](https://nuxt.com/)** - The intuitive web framework (built on Vue.js)
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - For type-safe development
- **[Nuxt UI](https://ui.nuxt.com/)** - Beautiful, accessible UI components
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Backend & Services
- **[Supabase](https://supabase.com/)** - Backend-as-a-Service for authentication and database
- **[OpenAI API](https://openai.com/)** - For AI chat capabilities
- **Server-Sent Events (SSE)** - Real-time streaming for AI responses

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Valibot](https://valibot.dev/)** - Schema validation library

## 🚀 Getting Started

Follow these simple steps to get the project running on your computer:

### Prerequisites

Make sure you have **Node.js** installed on your computer:
- Download from [nodejs.org](https://nodejs.org/) (choose the LTS version)
- This will also install `npm` (package manager)

### Step 1: Download the Project

```bash
# Clone the repository to your computer
git clone https://github.com/your-username/nuxt-corestart-ai.git

# Navigate into the project folder
cd nuxt-corestart-ai
```

### Step 2: Install Dependencies

Install all the required packages (this might take a few minutes):

```bash
# Using npm (recommended for beginners)
npm install
```

*Alternative package managers (if you prefer):*
```bash
# Using pnpm (faster)
pnpm install

# Using yarn
yarn install

# Using bun (fastest)
bun install
```

### Step 3: Set Up Environment Variables

Environment variables are like secret configuration settings for your app.

#### Create your environment file:
```bash
cp .env.example .env
```

#### Get your API keys and fill in the values:

Open the `.env` file in your text editor and replace the placeholder values:

```bash
# OpenAI Configuration
# 👉 Get this from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_actual_openai_api_key_here

# Supabase Configuration  
# 👉 Get these from: https://supabase.com/dashboard (your project settings)
SUPABASE_URL=your_actual_supabase_url
SUPABASE_ANON_KEY=your_actual_supabase_anon_key
```

#### Where to get these values:

**🔑 OpenAI API Key:**
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up for an account (you'll get some free credits!)
3. Navigate to "API Keys" in your dashboard
4. Click "Create new secret key"
5. Copy the key and paste it into your `.env` file

**🗄️ Supabase URL & Key:**
1. Go to [Supabase](https://supabase.com/)
2. Sign up and create a new project (it's free!)
3. Go to Project Settings → API
4. Copy the "Project URL" and "Project API Key (anon public)"
5. Paste them into your `.env` file

### Step 4: Set Up Cursor AI Integration (Optional)

*If you're using Cursor AI editor, this will give you enhanced database integration:*

```bash
# Copy the MCP configuration file
cp .cursor/mcp.json.example .cursor/mcp.json
```

**Get a Supabase Personal Access Token:**
1. Go to [Supabase Account Settings](https://supabase.com/dashboard/account/tokens)
2. Click "Generate new token"
3. Give it a name and copy the token
4. Open `.cursor/mcp.json` and replace `<personal-access-token>` with your actual token

## 🏃‍♂️ Running the Project

### Start Development Server

This starts the app in development mode with hot reload (changes appear instantly):

```bash
npm run dev
```

🎉 **Your app will be available at:** [http://localhost:3000](http://localhost:3000)

### Build for Production

When you're ready to deploy your app:

```bash
# Build the application for production
npm run build

# Preview the production build locally
npm run preview
```

## 💡 What Can You Build With This?

This starter kit is perfect for creating:

### 🎯 **AI-Powered Business Tools**
- **Customer Support Chatbots** - Automated help desk with AI responses
- **Business Intelligence Dashboards** - Analytics with AI-generated insights
- **Content Management Systems** - With AI writing assistance
- **Project Management Tools** - With AI task automation

### 💬 **Smart Communication Apps**
- **Educational Tutoring Platforms** - AI-powered learning assistance
- **Team Collaboration Tools** - With AI meeting summaries and suggestions
- **Personal AI Assistants** - For productivity and organization
- **Language Learning Apps** - With AI conversation practice

### 🛍 **E-commerce & SaaS Applications**
- **AI Product Recommendations** - Smart shopping experiences
- **Automated Customer Service** - 24/7 AI support
- **Personalized User Experiences** - AI-driven content curation
- **Smart Inventory Management** - AI-powered stock optimization

### 📊 **Data-Driven Applications**
- **Social Platforms** - With AI content moderation
- **CRM Systems** - With AI lead scoring and automation
- **Financial Tools** - AI-powered expense tracking and budgeting
- **Health & Fitness Apps** - With AI coaching and recommendations

## 🔧 How to Customize & Extend

This starter kit is designed to be easily extended:

- **📄 Add new pages**: Create `.vue` files in the `pages/` directory
- **🤖 Custom AI features**: Modify the OpenAI integration in `server/api/openai/`
- **🗄️ Database operations**: Use Supabase client for data management
- **🎨 UI components**: Leverage Nuxt UI components or create your own
- **🔐 Authentication flows**: Customize login/signup in the `auth/` pages

## 🆘 Need Help?

### Documentation & Guides
- **Nuxt 3 Documentation**: [nuxt.com/docs](https://nuxt.com/docs)
- **Supabase Guides**: [supabase.com/docs](https://supabase.com/docs)
- **OpenAI API Reference**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Nuxt UI Components**: [ui.nuxt.com](https://ui.nuxt.com)

### Common Issues
- **Environment variables not working?** Make sure your `.env` file is in the root directory and contains the correct values
- **API errors?** Check that your OpenAI and Supabase keys are valid and have the necessary permissions
- **Build errors?** Try deleting `node_modules` and running `npm install` again

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉** Start building something amazing with AI today!
