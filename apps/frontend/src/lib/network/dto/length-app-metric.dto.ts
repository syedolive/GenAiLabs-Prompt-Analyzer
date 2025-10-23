import * as z from "zod";

export const LengthMetricsSchema = z.object({
    "id": z.string(),
    "prompt_response_id": z.string(),
    "response_token_count": z.number(),
    "response_sentence_count": z.number(),
    "response_word_count": z.number(),
    "avg_sentence_length": z.string(),
    "response_to_prompt_ratio": z.string(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
    "extras": z.null(),
});
export type LengthMetrics = z.infer<typeof LengthMetricsSchema>;

export const ProfileSchema = z.object({
    "id": z.string(),
    "profile_name": z.string(),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const PromptSchema = z.object({
    "id": z.string(),
    "prompt": z.string(),
});
export type Prompt = z.infer<typeof PromptSchema>;

export const LengthAppropriatenessResponseElementSchema = z.object({
    "id": z.string(),
    "response": z.string(),
    "profile": ProfileSchema,
    "prompt": PromptSchema,
    "lengthMetrics": LengthMetricsSchema,
});
export type LengthAppropriatenessResponseElement = z.infer<typeof LengthAppropriatenessResponseElementSchema>;
