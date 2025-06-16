import type {
  ChatMessage,
  ChatRequest,
  ChatResponse,
  StreamChunk,
} from "~/types/openai";

export const useOpenAI = () => {
  const sendChatMessage = async (
    messages: ChatMessage[],
    options: { temperature?: number; maxTokens?: number } = {}
  ): Promise<ChatResponse> => {
    try {
      const request: ChatRequest = {
        messages,
        temperature: options.temperature || 0.7,
        maxTokens: options.maxTokens || 1000,
      };

      const response = await $fetch<ChatResponse>("/api/openai/chat", {
        method: "POST",
        body: request,
      });

      return response;
    } catch (error: unknown) {
      console.error("Chat API Error:", error);
      throw error;
    }
  };

  const sendStreamingChatMessage = async (
    messages: ChatMessage[],
    options: { temperature?: number; maxTokens?: number } = {},
    onChunk: (chunk: StreamChunk) => void
  ): Promise<void> => {
    try {
      const request: ChatRequest = {
        messages,
        temperature: options.temperature || 0.7,
        maxTokens: options.maxTokens || 1000,
      };

      const response = await fetch("/api/openai/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("Failed to get response reader");
      }

      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                onChunk(data);

                if (data.done) {
                  return;
                }
              } catch (parseError) {
                console.error("Failed to parse SSE data:", parseError);
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    } catch (error: unknown) {
      console.error("Streaming Chat API Error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to process streaming request";
      onChunk({
        content: "",
        done: true,
        error: errorMessage,
      });
    }
  };

  return {
    sendChatMessage,
    sendStreamingChatMessage,
  };
};
