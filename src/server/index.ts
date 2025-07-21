import { usersRouter } from "@/routers/users";
import { router } from "./trcp";
import { userRouter } from "@/routers/user";

export const appRouter = router({
    user: userRouter,
    users: usersRouter
})

export type AppRouter = typeof appRouter