import { z } from "zod";

export const promptComposerFormSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least more than 10 characters"),
  model: z.string().min(1, "Select an LLM model to continue"),
  samplingProfiles: z
    .array(z.string())
    .min(1, "At least one sampling profile must be selected"),
  tokens: z.number().min(0, "Tokens must be a positive number"),
});

export type PromptComposerFormSchema = z.infer<typeof promptComposerFormSchema>;
