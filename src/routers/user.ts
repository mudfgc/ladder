import { db } from "@/db";
import { user } from "@/db/schema";
import { destroy, update } from "@/schemas/user";
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
                throw new TRPCError({ message: "username already taken", code: "CONFLICT" })
            }
        }

        return await db.update(user).set(data.payload).where(eq(user.id, data.id))
    }),
    destroy: publicProcedure.input(destroy).mutation(async (opts) => {
        const data = opts.input
        return await db.delete(user).where(eq(user.id, data.id))
    })
})