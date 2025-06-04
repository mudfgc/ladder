import z from "zod";

export const update = z.object({
    id: z.string(),
    payload: z.object({
        username: z.string().min(2).max(50)
    })
})