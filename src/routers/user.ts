import { db } from "@/db";
import { user } from "@/db/schema";
import { update } from "@/schemas/user";
import { publicProcedure, router } from "@/server/trcp";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { isEmpty } from "lodash";

export const userRouter = router({
    update: publicProcedure.input(update).mutation(async (opts) => {
        const data = opts.input

        if (data.payload.username) {
            const existingUser = await db.select().from(user).where(eq(user.username, data.payload.username)).limit(1);

            if (!isEmpty(existingUser) && existingUser[0].id !== data.id) {
                throw new TRPCError({ message: "already taken", code: "CONFLICT" })
            }
        }

        return await db.update(user).set(data.payload).where(eq(user.id, data.id))
    })
})