<template>
  <div>
    <!-- App Header -->
    <AppHeader />
    
    <UContainer class="py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Chat Assistant
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Chat with OpenAI's GPT model. Ask questions, get creative, or just
            have a conversation!
          </p>
        </div>

        <!-- Settings Panel -->
        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">Settings</h3>
              <UButton
                variant="ghost"
                size="sm"
                :icon="
                  showSettings
                    ? 'i-heroicons-chevron-up'
                    : 'i-heroicons-chevron-down'
                "
                @click="showSettings = !showSettings"
              >
                {{ showSettings ? "Hide" : "Show" }}
              </UButton>
            </div>
          </template>

          <template v-if="showSettings" #default>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Temperature Control -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Temperature: {{ temperature }}
                  </label>
                  <URange
                    v-model="temperature"
                    :min="0"
                    :max="2"
                    :step="0.1"
                    class="w-full"
                  />
                  <p class="text-xs text-gray-500 mt-1">
                    Higher values make output more random
                  </p>
                </div>

                <!-- Max Tokens Control -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Max Tokens: {{ maxTokens }}
                  </label>
                  <URange
                    v-model="maxTokens"
                    :min="100"
                    :max="4000"
                    :step="100"
                    class="w-full"
                  />
                  <p class="text-xs text-gray-500 mt-1">
                    Maximum length of the response
                  </p>
                </div>

                <!-- Streaming Toggle -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Streaming Mode
                  </label>
                  <UToggle v-model="streamMode" :disabled="isLoading" />
                  <p class="text-xs text-gray-500 mt-1">
                    {{
                      streamMode
                        ? "Real-time response"
                        : "Wait for complete response"
                    }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </UCard>

        <!-- Chat Interface -->
        <div class="space-y-6">
          <!-- Input Area -->
          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold">Your Message</h3>
            </template>

            <div class="space-y-4">
              <UTextarea
                v-model="userInput"
                class="w-full"
                placeholder="Type your message here... Ask anything!"
                :rows="4"
                :disabled="isLoading"
                @keydown.ctrl.enter="sendMessage"
                @keydown.meta.enter="sendMessage"
              />

              <div class="flex items-center justify-between">
                <p class="text-xs text-gray-500">
                  Press Ctrl+Enter (Cmd+Enter on Mac) to send
                </p>
                <div class="flex items-center space-x-2">
                  <UButton
                    variant="outline"
                    size="sm"
                    icon="i-heroicons-arrow-path"
                    :disabled="isLoading || messages.length === 0"
                    @click="clearMessages"
                  >
                    Clear Chat
                  </UButton>
                  <UButton
                    size="sm"
                    icon="i-heroicons-paper-airplane"
                    :disabled="isLoading || !userInput.trim()"
                    :loading="isLoading"
                    @click="sendMessage"
                  >
                    {{ isLoading ? "Sending..." : "Send Message" }}
                  </UButton>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Messages Display -->
          <UCard v-if="messages.length > 0" class="min-h-[300px]">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Conversation</h3>
                <UButton
                  variant="ghost"
                  size="sm"
                  icon="i-heroicons-trash"
                  :disabled="isLoading"
                  @click="clearMessages"
                >
                  Clear
                </UButton>
              </div>
            </template>

            <div class="space-y-4 max-h-[500px] overflow-y-auto">
              <div
                v-for="(message, index) in messages"
                :key="index"
                class="flex"
                :class="
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                "
              >
                <div
                  class="max-w-[80%] rounded-lg px-4 py-2"
                  :class="
                    message.role === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  "
                >
                  <div class="text-xs opacity-70 mb-1">
                    {{ message.role === "user" ? "You" : "AI Assistant" }}
                  </div>
                  <div class="whitespace-pre-wrap">{{ message.content }}</div>
                </div>
              </div>

              <!-- Streaming Response -->
              <div v-if="streamingResponse" class="flex justify-start">
                <div
                  class="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <div class="text-xs opacity-70 mb-1">AI Assistant</div>
                  <div class="whitespace-pre-wrap">{{ streamingResponse }}</div>
                  <div
                    v-if="isStreaming"
                    class="inline-block w-2 h-4 bg-current animate-pulse ml-1"
                  />
                </div>
              </div>
            </div>
          </UCard>

          <!-- Error Display -->
          <UAlert
            v-if="error"
            icon="i-heroicons-exclamation-triangle"
            color="error"
            variant="soft"
            :title="error"
            :close-button="{
              icon: 'i-heroicons-x-mark-20-solid',
              color: 'gray',
              variant: 'link',
              padded: false,
            }"
            @close="error = null"
          />

          <!-- Usage Info -->
          <UCard v-if="lastUsage" class="bg-gray-50 dark:bg-gray-900">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <strong>Last Response Usage:</strong>
              {{ lastUsage.prompt_tokens }} prompt tokens,
              {{ lastUsage.completion_tokens }} completion tokens,
              {{ lastUsage.total_tokens }} total tokens
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage, TokenUsage } from "~/types/openai";

// Page metadata
definePageMeta({
  middleware: "auth",
});

// Reactive state
const showSettings = ref(true);
const temperature = ref(0.7);
const maxTokens = ref(1000);
const streamMode = ref(true);
const userInput = ref("");
const messages = ref<ChatMessage[]>([]);
const streamingResponse = ref("");
const isLoading = ref(false);
const isStreaming = ref(false);
const error = ref<string | null>(null);
const lastUsage = ref<TokenUsage | null>(null);

// Composables
const { sendChatMessage, sendStreamingChatMessage } = useOpenAI();

// Methods
const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  const userMessage: ChatMessage = {
    role: "user",
    content: userInput.value.trim(),
  };

  // Add user message to conversation
  messages.value.push(userMessage);
  const currentInput = userInput.value;
  userInput.value = "";
  error.value = null;
  isLoading.value = true;

  try {
    if (streamMode.value) {
      // Streaming mode
      streamingResponse.value = "";
      isStreaming.value = true;

      await sendStreamingChatMessage(
        messages.value,
        {
          temperature: temperature.value,
          maxTokens: maxTokens.value,
        },
        (chunk) => {
          if (chunk.error) {
            error.value = chunk.error;
            isStreaming.value = false;
            return;
          }

          if (chunk.content) {
            streamingResponse.value += chunk.content;
          }

          if (chunk.done) {
            // Add the complete response to messages
            if (streamingResponse.value) {
              messages.value.push({
                role: "assistant",
                content: streamingResponse.value,
              });
            }
            streamingResponse.value = "";
            isStreaming.value = false;
          }
        }
      );
    } else {
      // Regular mode
      const response = await sendChatMessage(messages.value, {
        temperature: temperature.value,
        maxTokens: maxTokens.value,
      });

      // Add AI response to conversation
      messages.value.push({
        role: "assistant",
        content: response.data.message,
      });

      lastUsage.value = response.data.usage || null;
    }
  } catch (err: unknown) {
    console.error("Chat error:", err);

    // Extract error message safely
    let errorMessage = "Failed to send message";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "object" && err !== null && "data" in err) {
      const errorData = err.data as { message?: string };
      errorMessage = errorData.message || errorMessage;
    }

    error.value = errorMessage;

    // Restore user input on error
    userInput.value = currentInput;

    // Remove the user message that failed
    messages.value.pop();
  } finally {
    isLoading.value = false;
    isStreaming.value = false;
  }
};

const clearMessages = () => {
  messages.value = [];
  streamingResponse.value = "";
  error.value = null;
  lastUsage.value = null;
};

// Auto-scroll to bottom when new messages are added
watch([messages, streamingResponse], () => {
  nextTick(() => {
    const container = document.querySelector(".overflow-y-auto");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  });
});
</script>
