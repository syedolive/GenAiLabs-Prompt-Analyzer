import * as z from "zod";


export const CompletenessSchema = z.object({
    "score": z.number(),
    "P_size": z.number(),
    "R_size": z.number(),
    "overlap": z.number(),
});
export type Completeness = z.infer<typeof CompletenessSchema>;

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

export const ResponseSchema = z.object({
    "id": z.string(),
    "response": z.string(),
    "lengthMetrics": LengthMetricsSchema,
    "completeness": CompletenessSchema,
});
export type Response = z.infer<typeof ResponseSchema>;

export const ExportResponseSchema = z.object({
    "promptId": z.string(),
    "prompt": z.string(),
    "responses": z.array(ResponseSchema),
});
export type ExportResponse = z.infer<typeof ExportResponseSchema>;
