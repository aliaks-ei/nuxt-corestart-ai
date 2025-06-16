<template>
  <div>
    <!-- Hero Section -->
    <UContainer class="py-16 sm:py-24">
      <div class="text-center">
        <UBadge variant="subtle" class="mb-4"> Welcome to the Future </UBadge>
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6"
        >
          Build Amazing Things with
          <span class="text-primary-600 dark:text-primary-400">Nuxt</span>
        </h1>
        <p
          class="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Experience the power of modern web development with our secure, fast,
          and beautiful application. Get started today and unlock your
          potential.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="lg" class="px-8" @click="navigateTo('/login')">
            Get Started
          </UButton>
          <UButton
            variant="outline"
            size="lg"
            class="px-8"
            @click="scrollToFeatures"
          >
            Learn More
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Features Section -->
    <UContainer id="features" class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Our Platform?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the features that make our platform the perfect choice for
          your next project.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-shield-check"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Secure Authentication
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Enterprise-grade security with Supabase authentication. Magic links,
            OAuth, and more.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-bolt"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Lightning Fast
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Built with Nuxt 3 for optimal performance. Server-side rendering and
            modern optimizations.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon
                name="i-heroicons-sparkles"
                class="w-12 h-12 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Beautiful Design
            </h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Crafted with Nuxt UI components. Clean, modern, and fully responsive
            design system.
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
            Ready to Get Started?
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of developers who are already building amazing
            applications with our platform.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" class="px-8" @click="navigateTo('/login')">
              Sign Up Now
            </UButton>
            <UButton
              v-if="!user"
              variant="ghost"
              size="lg"
              class="px-8"
              @click="navigateTo('/login')"
            >
              Already have an account?
            </UButton>
            <UButton
              v-if="user"
              variant="outline"
              size="lg"
              class="px-8"
              @click="navigateTo('/dashboard')"
            >
              Go to Dashboard
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
