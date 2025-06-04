import { router } from "./trcp";
import { userRouter } from "@/routers/user";

export const appRouter = router({
    user: userRouter
})

export type AppRouter = typeof appRouter