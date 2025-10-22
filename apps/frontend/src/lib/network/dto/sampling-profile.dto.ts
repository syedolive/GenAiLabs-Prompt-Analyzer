import * as z from "zod";


export const createSamplingProfileResponseSchema = z.object({
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
export type CreateSamplingProfileResponse = z.infer<typeof createSamplingProfileResponseSchema>;
