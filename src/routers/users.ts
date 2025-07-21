import { db } from "@/db";
import { user } from "@/db/schema";
import { User } from "@/lib/session";
import { publicProcedure, router } from "@/server/trcp";

export const usersRouter = router({
    get: publicProcedure.query(async (opts) => {
        return await db.select().from(user)
    })
})