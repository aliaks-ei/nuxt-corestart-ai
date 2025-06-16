<template>
  <div>
    <!-- App Header -->
    <AppHeader />
    
    <!-- Hero Section -->
    <UContainer class="py-16 sm:py-24">
      <div class="text-center">
        <UBadge variant="subtle" class="mb-4"> Ready-to-Use Template </UBadge>
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6"
        >
          Skip the Setup, Start Building with
          <span class="text-primary-600 dark:text-primary-400">Nuxt + Supabase</span>
        </h1>
        <p
          class="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Why spend days setting up auth when you can start coding in minutes? 
          This template comes with magic link authentication, Google OAuth, OpenAI-powered AI chat, and 
          everything you need to build your next big idea. Just clone, customize, and ship! 🚀
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="lg" class="px-8" @click="navigateTo('/login')">
            Try the Auth
          </UButton>
          <UButton
            variant="outline"
            size="lg"
            class="px-8"
            @click="navigateTo('/ai-chat')"
          >
            Try AI Chat
          </UButton>
          <UButton
            v-if="user"
            variant="ghost"
            size="lg"
            class="px-8"
            @click="navigateTo('/dashboard')"
          >
            View Dashboard
          </UButton>
          <UButton
            v-else
            variant="ghost"
            size="lg"
            class="px-8"
            @click="scrollToFeatures"
          >
            See What's Included
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Features Section -->
    <UContainer id="features" class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          What's Already Built for You?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stop reinventing the wheel. This template includes all the boring stuff 
          so you can focus on what makes your app unique.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-envelope"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Seamless Authentication
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            No passwords, no hassle. Users can sign in with just their email 
            or Google account. Supabase handles all the security heavy lifting.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-rocket-launch"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Modern Tech Stack
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Nuxt 3 for lightning-fast performance, Supabase for backend magic, 
            OpenAI for intelligent conversations, and Nuxt UI for beautiful components. The dream team is assembled.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-code-bracket"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Production Ready
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Clean code, proper middleware, TypeScript support, and best practices 
            baked in. Deploy with confidence from day one.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              AI Chat Integration
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Built-in OpenAI integration with streaming support, customizable 
            temperature and token limits. Chat with AI right out of the box!
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- CTA Section -->
    <UContainer class="py-16">
      <UCard
        class="bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-800"
      >
        <div class="text-center py-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Something Awesome?
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Clone this template, add your own features, and you'll have a 
            production-ready app with AI capabilities faster than you can say "authentication flow". 
            Your future self will thank you! 
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" class="px-8" @click="navigateTo('/login')">
              Test Drive the Auth
            </UButton>
            <UButton
              variant="outline"
              size="lg"
              class="px-8"
              @click="navigateTo('/ai-chat')"
            >
              Try AI Chat
            </UButton>
            <UButton
              v-if="!user"
              variant="ghost"
              size="lg"
              class="px-8"
              @click="navigateTo('/login')"
            >
              See Login Flow
            </UButton>
            <UButton
              v-if="user"
              variant="ghost"
              size="lg"
              class="px-8"
              @click="navigateTo('/dashboard')"
            >
              Check Out Dashboard
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Home page is accessible to everyone (no middleware)
const user = useSupabaseUser();

const scrollToFeatures = () => {
  document.getElementById("features")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>
