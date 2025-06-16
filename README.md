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

## 🍴 Fork This Repository (Recommended)

Before getting started, we recommend **forking** this repository to your own GitHub account:

### Why Fork?
- **Your own copy**: You'll have your own version that you can modify freely
- **Easy updates**: You can pull in updates from the original repository when needed
- **Backup**: Your code will be safely stored in your GitHub account
- **Collaboration**: Others can contribute to your version via pull requests

### How to Fork:
1. **Using GitHub UI** (Easiest):
   - Click the **"Fork"** button at the top-right of this repository page
   - Choose your GitHub account as the destination
   - GitHub will create a copy in your account

2. **What happens**: You'll get a copy like `your-username/nuxt-corestart-ai`

> **💡 Tip**: After forking, you'll clone YOUR fork (not the original repository) in the next steps.

## 🚀 Getting Started

Follow these simple steps to get the project running on your computer:

### Prerequisites

Make sure you have **Node.js** installed on your computer:
- Download from [nodejs.org](https://nodejs.org/) (choose the LTS version)
- This will also install `npm` (package manager)

### 📱 Opening Your Terminal

Before we start, you'll need to open a terminal (command line) on your computer:

#### **macOS:**
- **Terminal app**: Press `Cmd + Space`, type "Terminal", press Enter
- **iTerm2**: If installed, same process but search for "iTerm"
- **VS Code**: Open VS Code, then `Terminal → New Terminal`

#### **Windows:**
- **Command Prompt**: Press `Win + R`, type `cmd`, press Enter
- **PowerShell**: Press `Win + X`, select "Windows PowerShell"
- **Git Bash**: If Git is installed, right-click in any folder → "Git Bash Here"
- **WSL**: If using Windows Subsystem for Linux, search for "WSL" or "Ubuntu"

#### **Linux:**
- **Terminal**: Press `Ctrl + Alt + T`
- **Or**: Search for "Terminal" in your applications menu

#### **Basic Navigation Commands:**
```bash
# See where you are
pwd

# List files and folders
ls        # macOS/Linux
dir       # Windows

# Change directory
cd folder-name       # Go into a folder
cd ..                # Go up one level
cd ~                 # Go to home directory
```

### Step 1: Download the Project

You have several options to get the project on your computer:

#### **Option A: Clone with Git (Recommended)**

If you forked the repository (recommended):
```bash
# Replace 'your-username' with your actual GitHub username
git clone https://github.com/your-username/nuxt-corestart-ai.git
```

If you want to clone the original repository:
```bash
# HTTPS (works everywhere)
git clone https://github.com/original-username/nuxt-corestart-ai.git

# SSH (if you have SSH keys set up)
git clone git@github.com:original-username/nuxt-corestart-ai.git
```

#### **Option B: Download ZIP (No Git required)**

1. Click the green **"Code"** button on the GitHub repository page
2. Select **"Download ZIP"**
3. Extract the ZIP file to your desired location
4. Open terminal and navigate to the extracted folder

#### **Navigate to the project folder:**
```bash
cd nuxt-corestart-ai
```

### Step 2: Open in Your Code Editor

Open the project in your preferred code editor:

#### **Cursor (Recommended - AI-powered editor):**
```bash
# If Cursor is installed and in your PATH
cursor .

# Or open Cursor and use File → Open Folder
```
> **✨ Special for Cursor users**: This project includes pre-configured AI coding rules and MCP integration for enhanced development experience!

#### **VS Code:**
```bash
# If VS Code is installed and in your PATH
code .

# Or open VS Code and use File → Open Folder
```

#### **Other IDEs:**
- **WebStorm/IntelliJ**: File → Open → Select the project folder
- **Sublime Text**: File → Open Folder
- **Any editor**: Just open the project folder

**Recommended Extensions (VS Code/Cursor):**
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Tailwind CSS IntelliSense
- Auto Rename Tag

### Step 3: Install Dependencies

Install all the required packages (this might take a few minutes):

```bash
# Using npm (recommended for beginners)
npm install
```

#### **Alternative Package Managers:**

You can use different package managers based on your needs:

```bash
# pnpm - Faster and more disk-efficient
pnpm install

# yarn - Good for monorepos and has excellent caching
yarn install

# bun - Fastest, newest package manager
bun install
```

**Why use alternatives?**
- **npm**: Default, most compatible, works everywhere
- **pnpm**: 2-3x faster, saves disk space by sharing packages between projects
- **yarn**: Excellent for large projects, reliable dependency resolution
- **bun**: Fastest installation and runtime, cutting-edge features

**Which should you choose?**
- **Beginners**: Stick with `npm`
- **Speed focused**: Try `pnpm` or `bun`
- **Large projects**: Consider `yarn`

### Step 4: Set Up Environment Variables

Environment variables are like secret configuration settings for your app.

#### Create your environment file:
```bash
cp .env.example .env
```

---

## 🔑 **WHERE TO GET YOUR API KEYS** 

> **⚠️ IMPORTANT**: You need these API keys for the app to work properly!

Open the `.env` file in your text editor and replace the placeholder values:

```bash
# OpenAI Configuration
# 👉 Get this from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_actual_openai_api_key_here

# Supabase Configuration  
# 👉 Get these from: https://supabase.com/dashboard (your project settings)
SUPABASE_URL=your_actual_supabase_url
SUPABASE_KEY=your_actual_SUPABASE_KEY
```

### 🔑 **Getting Your OpenAI API Key:**

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up for an account (you'll get some free credits!)
3. Navigate to **"API Keys"** in your dashboard
4. Click **"Create new secret key"**
5. **Copy the key** and paste it into your `.env` file
6. **Important**: Keep this key secret and never commit it to version control!

### 🗄️ **Getting Your Supabase Credentials:**

1. Go to [Supabase](https://supabase.com/)
2. Sign up and **create a new project** (it's free!)
3. Wait for the project to be set up (takes ~2 minutes)
4. Go to **Project Settings → API**
5. Copy the **"Project URL"** and **"Project API Key (anon public)"**
6. Paste them into your `.env` file

---

### Step 5: Configure Google Authentication (Optional)

To enable Google OAuth login, you need to set up Google credentials. This process involves configuring both Google Cloud Console and Supabase.

> **⚠️ Important**: Google requires you to configure a consent screen before creating OAuth credentials.

### **Part A: Google Cloud Console Setup**

### **1. Create or Select a Project:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **Create a new project** or select an existing one from the dropdown at the top
3. Wait for the project to be created/selected

### **2. Configure OAuth Consent Screen (Required):**
> **📋 Note**: Google requires this step before you can create OAuth credentials.

1. In the **left sidebar**, click **"APIs & services"** → **"OAuth consent screen"**
2. Choose **"External"** (unless you have a Google Workspace account)
3. Click **"Create"**
4. Fill in the required fields:
   - **App name**: Your app name (e.g., "My AI App")
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
5. Click **"Save and Continue"** through the remaining steps (you can skip optional fields for now)
6. Click **"Back to Dashboard"** when finished

### **3. Enable Google+ API:**
1. In the **left sidebar**, click **"APIs & services"** → **"Library"**
2. Search for **"Google+ API"** in the search bar
3. Click on **"Google+ API"** from the results
4. Click **"Enable"** button
5. Wait for the API to be enabled (this may take a moment)

### **4. Create OAuth Credentials:**
1. In the **left sidebar**, click **"APIs & services"** → **"Credentials"**
2. Click **"+ Create Credentials"** → **"OAuth client ID"**
3. Choose **"Web application"** as the application type
4. Give it a name (e.g., "My App OAuth Client")
5. **Add Authorized Redirect URIs** (see next section for how to get these URLs)

### **5. Get Your Callback URLs:**

You have two options to get the correct callback URL:

**Option A: From Supabase Dashboard (Recommended):**
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **"Authentication"** → **"Sign In / Providers"** in the left sidebar
4. Click on **"Google"** in the providers list
5. You'll see the **"Callback URL (for OAuth)"** - copy this exact URL

**Option B: Construct Manually:**
- Your callback URL follows this pattern: `https://[your-project-ref].supabase.co/auth/v1/callback`
- Replace `[your-project-ref]` with your Supabase project reference
- **To find your project reference**: Look at your `SUPABASE_URL` - it's the part before `.supabase.co`
- Example: If your `SUPABASE_URL` is `https://abcd1234.supabase.co`, then your callback URL is `https://abcd1234.supabase.co/auth/v1/callback`

### **6. Add the Redirect URIs:**
Back in Google Cloud Console, add these URLs to **"Authorized redirect URIs"**:
```
https://your-actual-project-ref.supabase.co/auth/v1/callback
http://localhost:3000/auth/callback
```
> Replace `your-actual-project-ref` with your real Supabase project reference

Click **"Create"**

### **7. Copy Your Credentials:**
> **🔐 Security Warning**: Keep these credentials secure and never commit them to version control!

1. **Copy the Client ID** - you'll need this for Supabase
2. **Copy the Client Secret** - you'll also need this for Supabase
3. **Store them safely** - consider using a password manager

### **Part B: Supabase Configuration**

### **1. Navigate to Providers:**
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. In the left sidebar, click **"Authentication"** → **"Sign In / Providers"**

### **2. Configure Google Provider:**
1. Find **"Google"** in the list of providers and click on it
2. **Enable** the Google provider by toggling the switch
3. **Paste your Google Client ID** in the "Client ID" field
4. **Paste your Google Client Secret** in the "Client Secret" field
5. Click **"Save"** to apply the configuration

> **✅ Verification**: You should see a green checkmark next to Google in the providers list

### **Part C: Testing Google Authentication**

### **Test the Integration:**
1. **Start your development server**: `npm run dev`
2. **Navigate to the login page**: [http://localhost:3000/login](http://localhost:3000/login)
3. **Look for the Google button**: You should see a "Continue with Google" or "Sign in with Google" button
4. **Test the login flow**: Click the button and verify it redirects to Google's OAuth flow

### **Troubleshooting Common Issues:**

**❌ "Error 400: redirect_uri_mismatch"**
- **Solution**: Double-check that your redirect URI in Google Cloud Console exactly matches your Supabase callback URL
- **Check**: Make sure there are no extra spaces or typos in the URLs

**❌ "Error 403: access_blocked"**
- **Solution**: Make sure you've completed the OAuth consent screen configuration
- **Check**: Verify that your app is not in "Testing" mode if you want external users to access it

**❌ Google button doesn't appear**
- **Solution**: Check that you've enabled the Google provider in Supabase and saved the configuration
- **Check**: Verify your Client ID and Secret are correctly entered in Supabase

**❌ "Invalid client" error**
- **Solution**: Verify that your Client ID and Client Secret are correct
- **Check**: Make sure you copied the full credentials without any extra characters

### Step 6: Setup Cursor MCP Integration for Supabase (Optional)

*If you're using Cursor AI editor, this provides enhanced database integration and AI assistance:*

#### **Copy and Configure MCP File:**
```bash
# Copy the MCP configuration template
cp .cursor/mcp.json.example .cursor/mcp.json
```

> **⚠️ Important**: You need to edit the actual `mcp.json` file, not the `mcp.json.example` file!

#### **Get Supabase Personal Access Token:**

1. Go to [Supabase Account Settings](https://supabase.com/dashboard/account/tokens)
2. Click **"Generate new token"**
3. Give it a descriptive name (e.g., "Cursor MCP Integration")
4. **Copy the token** immediately (you won't see it again!)

#### **Configure the MCP File:**

1. Open `.cursor/mcp.json` in your editor
2. Replace `<personal-access-token>` with your actual Supabase token
3. Replace `<project-ref>` with your Supabase project reference (found in your project URL)
4. **Save the file**

#### **Test MCP Integration in Cursor:**

1. **Restart Cursor** completely
2. Open the **Cursor Chat** (Cmd/Ctrl + L)
3. Try asking: *"Show me the database schema"* or *"What tables do I have in Supabase?"*
4. If working correctly, Cursor should be able to query your Supabase database structure

#### **Troubleshooting MCP:**
- **Not working?** Check that your token has the correct permissions
- **Connection errors?** Verify your project reference is correct
- **Still issues?** Restart Cursor and check the MCP logs in Cursor settings

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

#### **Environment Variables**
- **Not working?** Make sure your `.env` file is in the root directory and contains the correct values
- **Still issues?** Restart your development server after changing environment variables

#### **API Errors**
- **OpenAI errors?** Check that your API key is valid and you have credits remaining
- **Supabase errors?** Verify your project URL and API key are correct

#### **Build Errors**
- **Dependencies issues?** Try deleting `node_modules` and running `npm install` again
- **TypeScript errors?** Make sure all required environment variables are set

#### **Authentication Issues**
- **Google login not working?** Check your OAuth configuration in both Google Cloud Console and Supabase
- **Magic link not working?** Verify your Supabase email settings

#### **Development Server Issues**
- **Port already in use?** Try `npm run dev -- --port 3001` to use a different port
- **Hot reload not working?** Try restarting the development server

## 🚀 Next Steps

After getting everything set up:

1. **Explore the codebase**: Check out the `pages/`, `components/`, and `server/` directories
2. **Customize the UI**: Modify components in the `components/` directory
3. **Add new features**: Create new pages and API endpoints
4. **Deploy your app**: Consider platforms like Vercel, Netlify, or Railway
5. **Join the community**: Share what you build and get help from other developers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉** Start building something amazing with AI today!
