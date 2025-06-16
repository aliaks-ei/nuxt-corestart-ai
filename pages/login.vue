<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <!-- Header -->
      <div class="text-center mb-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <UIcon name="i-heroicons-home" class="w-6 h-6 mr-2" />
          Nuxt App
        </NuxtLink>
        <h2
          class="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to your account to continue
        </p>
      </div>

      <!-- Login Card -->
      <UCard
        class="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
      >
        <div class="p-6">
          <!-- Magic Link Form -->
          <form class="space-y-6" @submit.prevent="signInWithMagicLink">
            <UFormGroup
              label="Email address"
              name="email"
              required
              :error="emailError"
            >
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email address"
                :disabled="loading"
                size="lg"
                icon="i-heroicons-envelope"
                :color="emailError ? 'red' : 'primary'"
                class="w-full"
                required
              />
            </UFormGroup>

            <UButton
              type="submit"
              block
              size="lg"
              :loading="loading"
              :disabled="!email || loading"
              class="font-semibold mt-4"
            >
              <template v-if="!loading"> Send Magic Link </template>
            </UButton>
          </form>

          <!-- Divider -->
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <UDivider />
              </div>
              <div class="relative flex justify-center text-sm">
                <span
                  class="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                >
                  Or
                </span>
              </div>
            </div>
          </div>

          <!-- Google OAuth -->
          <div class="mt-6">
            <UButton
              variant="outline"
              block
              size="lg"
              :loading="googleLoading"
              :disabled="googleLoading"
              class="font-semibold border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              @click="signInWithGoogle"
            >
              <template #leading>
                <UIcon name="i-logos-google-icon" class="w-5 h-5" />
              </template>
              <template v-if="!googleLoading"> Continue with Google </template>
            </UButton>
          </div>

          <!-- Alert Messages -->
          <UAlert
            v-if="message"
            :color="messageType"
            :title="messageType === 'success' ? 'Success!' : 'Error'"
            :description="message"
            class="mt-6"
            :close-button="{
              icon: 'i-heroicons-x-mark-20-solid',
              color: 'gray',
              variant: 'link',
              padded: false,
            }"
            @close="clearMessage"
          />
        </div>
      </UCard>

      <!-- Footer Links -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <span class="font-medium text-primary-600 dark:text-primary-400">
            Sign up with your email above
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest",
  layout: false,
});

const supabase = useSupabaseClient();
const email = ref("");
const loading = ref(false);
const googleLoading = ref(false);
const message = ref("");
const messageType = ref<"success" | "error">("success");
const emailError = ref("");

// Validate email format
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const signInWithMagicLink = async () => {
  if (!email.value) {
    emailError.value = "Email is required";
    return;
  }

  if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  emailError.value = "";
  loading.value = true;
  message.value = "";

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      message.value = error.message;
      messageType.value = "error";
    } else {
      message.value =
        "Check your email for the magic link! It may take a few minutes to arrive.";
      messageType.value = "success";
      email.value = "";
    }
  } catch {
    message.value = "An unexpected error occurred. Please try again.";
    messageType.value = "error";
  } finally {
    loading.value = false;
  }
};

const signInWithGoogle = async () => {
  googleLoading.value = true;
  message.value = "";

  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      message.value = error.message;
      messageType.value = "error";
      googleLoading.value = false;
    }
  } catch {
    message.value =
      "An unexpected error occurred with Google sign-in. Please try again.";
    messageType.value = "error";
    googleLoading.value = false;
  }
};

const clearMessage = () => {
  message.value = "";
};

// Clear email error when user starts typing
watch(email, () => {
  if (emailError.value) {
    emailError.value = "";
  }
});
</script>
