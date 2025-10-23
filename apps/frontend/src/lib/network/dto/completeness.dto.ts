import * as z from "zod";


export const CompletenessSchema = z.object({
    "score": z.number(),
    "P_size": z.number(),
    "R_size": z.number(),
    "overlap": z.number(),
});
export type Completeness = z.infer<typeof CompletenessSchema>;

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

export const CompletenessResponseElementSchema = z.object({
    "id": z.string(),
    "response": z.string(),
    "profile": ProfileSchema,
    "prompt": PromptSchema,
    "completeness": z.array(CompletenessSchema),
});
export type CompletenessResponseElement = z.infer<typeof CompletenessResponseElementSchema>;
