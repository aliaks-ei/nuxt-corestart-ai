<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <UContainer>
      <div class="flex items-center justify-between py-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p class="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back, {{ user?.email?.split("@")[0] }}!
          </p>
        </div>
        <div class="flex items-center gap-4">
          <UButton
            variant="outline"
            leading-icon="i-heroicons-home"
            @click="navigateTo('/')"
          >
            Home
          </UButton>
          <UDropdownMenu :items="menuItems">
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
                  size="md"
                  class="cursor-pointer"
                >
                  {{ user?.email?.charAt(0).toUpperCase() }}
                </UAvatar>
              </UButton>
            </template>
          </UDropdownMenu>
        </div>
      </div>
    </UContainer>

    <!-- Main Content -->
    <UContainer class="pb-12">
      <div class="grid grid-cols-1">
        <!-- Stats Cards -->
        <div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <UCard>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-user-circle"
                    class="w-8 h-8 text-primary-600"
                  />
                </div>
                <div class="ml-4">
                  <p
                    class="text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Account Status
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    Active
                  </p>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-clock"
                    class="w-8 h-8 text-green-600"
                  />
                </div>
                <div class="ml-4">
                  <p
                    class="text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Last Login
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ formatDate(user?.last_sign_in_at) }}
                  </p>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="w-8 h-8 text-blue-600"
                  />
                </div>
                <div class="ml-4">
                  <p
                    class="text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Security
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    Secure
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- User Information Card -->
        <div>
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Account Information
                </h3>
                <UBadge variant="subtle" color="success"> Verified </UBadge>
              </div>
            </template>

            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    class="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-2"
                  >
                    Email Address
                  </label>
                  <div class="flex items-center space-x-2">
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-4 h-4 text-primary-500"
                    />
                    <span class="text-sm text-gray-900 dark:text-white">
                      {{ user?.email }}
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-2"
                  >
                    User ID
                  </label>
                  <div class="flex items-center space-x-2">
                    <UIcon
                      name="i-heroicons-identification"
                      class="w-4 h-4 text-primary-500"
                    />
                    <span
                      class="text-sm font-mono text-gray-900 dark:text-white"
                    >
                      {{ user?.id }}
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-2"
                  >
                    Account Created
                  </label>
                  <div class="flex items-center space-x-2">
                    <UIcon
                      name="i-heroicons-calendar"
                      class="w-4 h-4 text-primary-500"
                    />
                    <span class="text-sm text-gray-900 dark:text-white">
                      {{ formatDate(user?.created_at) }}
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-2"
                  >
                    Last Updated
                  </label>
                  <div class="flex items-center space-x-2">
                    <UIcon
                      name="i-heroicons-arrow-path"
                      class="w-4 h-4 text-primary-500"
                    />
                    <span class="text-sm text-gray-900 dark:text-white">
                      {{ formatDate(user?.updated_at) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

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

const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>
