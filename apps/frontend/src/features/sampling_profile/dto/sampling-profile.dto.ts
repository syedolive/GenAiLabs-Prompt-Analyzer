import { z } from "zod";

export const sampleProfileFromSchema = z.object({
  profileName: z.string().min(1, "Profile name is required"),
  temperature: z.number().min(0, "Temperature must be at least 0").max(1, "Temperature must be at most 1"),
  topP: z.number().min(0, "Top-p must be at least 0").max(1, "Top-p must be at most 1"),
  topK: z.number().min(1, "Top-k must be at least 1"),
  maxTokens: z.number().min(1, "Max tokens must be at least 1").max(512, "Max tokens must be at most 512").optional(),
  presencePenalty: z.number().min(-2, "Presence penalty must be at least -2").max(2, "Presence penalty must be at most 2").optional(),
  frequencyPenalty: z.number().min(-2, "Frequency penalty must be at least -2").max(2, "Frequency penalty must be at most 2").optional(),
});

export type SampleProfileFromSchema = z.infer<typeof sampleProfileFromSchema>
