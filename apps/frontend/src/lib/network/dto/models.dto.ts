import * as z from "zod";


export const ModelsResponseElementSchema = z.object({
    "id": z.string(),
    "name": z.string(),
});
export type ModelsResponseElement = z.infer<typeof ModelsResponseElementSchema>;