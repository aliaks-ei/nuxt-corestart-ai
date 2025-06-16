<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
  >
    <div class="text-center">
      <UIcon
        name="i-heroicons-arrow-path"
        class="w-8 h-8 animate-spin mx-auto mb-4"
      />
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Completing sign in...
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Please wait while we redirect you.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

// The Supabase module automatically handles the callback
// This page just shows a loading state during the process
onMounted(() => {
  // Add a timeout to redirect to dashboard if something goes wrong
  setTimeout(() => {
    navigateTo("/dashboard");
  }, 500);
});
</script>
