<template>
  <UApp>
    <!-- Navigation Bar -->
    <UHeader>
      <template #left>
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <UIcon name="i-heroicons-home" class="w-6 h-6" />
          <span>Nuxt App</span>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center space-x-4">
          <template v-if="user">
            <!-- User Menu -->
            <div class="hidden sm:flex items-center space-x-3">
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ user.email?.split('@')[0] }}
              </span>
              <UAvatar 
                :alt="user.email || 'User'"
                size="sm"
                :ui="{ background: 'bg-primary-500 dark:bg-primary-400' }"
              >
                {{ user.email?.charAt(0).toUpperCase() }}
              </UAvatar>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden sm:flex items-center space-x-2">
              <UButton
                variant="ghost"
                size="sm"
                leading-icon="i-heroicons-squares-2x2"
                @click="navigateTo('/dashboard')"
              >
                Dashboard
              </UButton>
              <UButton
                variant="ghost"
                size="sm"
                leading-icon="i-heroicons-arrow-right-on-rectangle"
                @click="signOut"
              >
                Sign Out
              </UButton>
            </div>

            <!-- Mobile Menu -->
            <div class="sm:hidden">
              <UDropdownMenu
                :items="[
                  [
                    {
                      label: 'Dashboard',
                      icon: 'i-heroicons-squares-2x2',
                      click: () => navigateTo('/dashboard')
                    }
                  ],
                  [
                    {
                      label: 'Sign Out',
                      icon: 'i-heroicons-arrow-right-on-rectangle',
                      click: signOut
                    }
                  ]
                ]"
              >
                <UButton variant="ghost" size="sm" square>
                  <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
                </UButton>
              </UDropdownMenu>
            </div>
          </template>

          <template v-else>
            <UButton
              size="sm"
              leading-icon="i-heroicons-arrow-right-on-rectangle"
              @click="navigateTo('/login')"
            >
              Sign In
            </UButton>
          </template>
        </div>
      </template>
    </UHeader>

    <!-- Main Content -->
    <UMain>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const signOut = async () => {
  await supabase.auth.signOut();
  await navigateTo("/login");
};
</script>
