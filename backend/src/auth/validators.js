import { z } from "zod";

export const register = z.object({
    email: z.string().email(),
    password: z.string()
})