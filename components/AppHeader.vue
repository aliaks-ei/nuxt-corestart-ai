<template>
  <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex items-center justify-between py-4">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <UIcon name="i-heroicons-rocket-launch" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              CoreStart
            </span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            v-if="user"
            to="/dashboard" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/dashboard' }"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink 
            to="/ai-chat" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/ai-chat' }"
          >
            AI Chat
          </NuxtLink>
        </nav>

        <!-- User Actions -->
        <div class="flex items-center space-x-4">
          <!-- Mobile Menu Button -->
          <UButton
            v-if="!user"
            variant="ghost"
            class="md:hidden"
            @click="showMobileMenu = !showMobileMenu"
          >
            <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
          </UButton>

          <!-- Desktop Auth Actions -->
          <div class="hidden md:flex items-center space-x-3">
            <UButton
              v-if="!user"
              variant="outline"
              size="sm"
              @click="navigateTo('/login')"
            >
              Sign In
            </UButton>
            <UButton
              v-if="!user"
              size="sm"
              @click="navigateTo('/login')"
            >
              Get Started
            </UButton>
          </div>

          <!-- User Menu (when authenticated) -->
          <UDropdownMenu v-if="user" :items="menuItems">
            <template #default="{ open }">
              <UButton
                variant="ghost"
                :class="[
                  'p-0 hover:bg-transparent',
                  open && 'ring-2 ring-primary-500'
                ]"
              >
                <UAvatar
                  :alt="user?.email || 'User'"
                  size="sm"
                  class="cursor-pointer"
                >
                  {{ user?.email?.charAt(0).toUpperCase() }}
                </UAvatar>
              </UButton>
            </template>
          </UDropdownMenu>

          <!-- Mobile Menu Button for authenticated users -->
          <UButton
            v-if="user"
            variant="ghost"
            class="md:hidden"
            @click="showMobileMenu = !showMobileMenu"
          >
            <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
          </UButton>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
        <nav class="flex flex-col space-y-3">
          <NuxtLink 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-2 py-1"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/' }"
            @click="showMobileMenu = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            v-if="user"
            to="/dashboard" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-2 py-1"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/dashboard' }"
            @click="showMobileMenu = false"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink 
            to="/ai-chat" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-2 py-1"
            :class="{ 'text-primary-600 dark:text-primary-400 font-medium': $route.path === '/ai-chat' }"
            @click="showMobileMenu = false"
          >
            AI Chat
          </NuxtLink>
          
          <!-- Mobile Auth Actions -->
          <div v-if="!user" class="flex flex-col space-y-2 pt-3 border-t border-gray-200 dark:border-gray-800">
            <UButton
              variant="outline"
              size="sm"
              @click="navigateTo('/login'); showMobileMenu = false"
            >
              Sign In
            </UButton>
            <UButton
              size="sm"
              @click="navigateTo('/login'); showMobileMenu = false"
            >
              Get Started
            </UButton>
          </div>

          <!-- Mobile User Actions -->
          <div v-if="user" class="flex flex-col space-y-2 pt-3 border-t border-gray-200 dark:border-gray-800">
            <button
              @click="signOut(); showMobileMenu = false"
              class="text-left text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors px-2 py-1"
            >
              Sign Out
            </button>
          </div>
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const showMobileMenu = ref(false);

const signOut = async () => {
  await supabase.auth.signOut();
  await navigateTo("/login");
};

const menuItems = [
  [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      onSelect: () => navigateTo('/'),
    },
    {
      label: 'Dashboard',
      icon: 'i-heroicons-squares-2x2',
      onSelect: () => navigateTo('/dashboard'),
    },
    {
      label: 'AI Chat',
      icon: 'i-heroicons-chat-bubble-left-right',
      onSelect: () => navigateTo('/ai-chat'),
    },
  ],
  [
    {
      label: 'Sign Out',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      onSelect: signOut,
    },
  ],
];

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  showMobileMenu.value = false;
});
</script> 