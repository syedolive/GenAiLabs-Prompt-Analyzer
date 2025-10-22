import * as z from "zod";

export const CreatePromptResponseSchema = z.object({
  id: z.string(),
  prompt: z.string(),
  tokens: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type CreatePromptResponse = z.infer<typeof CreatePromptResponseSchema>;


export const DatumSchema = z.object({
    "id": z.string(),
    "prompt": z.string(),
    "tokens": z.number(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const PromptListResponseSchema = z.object({
    "data": z.array(DatumSchema),
    "next_page": z.number(),
    "has_next_page": z.boolean(),
});
export type PromptListResponse = z.infer<typeof PromptListResponseSchema>;



export const ModelModelSchema = z.object({
    "id": z.string(),
    "name": z.string(),
    "rpm": z.number(),
    "rpd": z.number(),
    "tpm": z.number(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
});
export type ModelModel = z.infer<typeof ModelModelSchema>;

export const ProfileSchema = z.object({
    "id": z.string(),
    "profile_name": z.string(),
    "temperature": z.number(),
    "top_k": z.number(),
    "top_p": z.number(),
    "presence_penalty": z.null(),
    "frequency_penalty": z.null(),
    "max_tokens": z.number(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const ModelElementSchema = z.object({
    "model_id": z.string(),
    "prompt_id": z.string(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
    "model": ModelModelSchema,
});
export type ModelElement = z.infer<typeof ModelElementSchema>;

export const ResponseSchema = z.object({
    "id": z.string(),
    "prompt_id": z.string(),
    "model_id": z.string(),
    "profile_id": z.string(),
    "response": z.null(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
    "profile": ProfileSchema,
});
export type Response = z.infer<typeof ResponseSchema>;

export const SinglePromptResponseSchema = z.object({
    "id": z.string(),
    "prompt": z.string(),
    "tokens": z.number(),
    "createdAt": z.coerce.date(),
    "updatedAt": z.coerce.date(),
    "responses": z.array(ResponseSchema),
    "models": z.array(ModelElementSchema),
});
export type SinglePromptResponse = z.infer<typeof SinglePromptResponseSchema>;
