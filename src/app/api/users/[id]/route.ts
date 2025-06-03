import { NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { isEmpty } from "lodash";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const data = await request.json() as UpdateUserPayload;

    if (!data) return NextResponse.json({ message: "request payload not found" }, { status: 403 });

    try {
        if (data.username) {
            const existingUser = await db.select().from(user).where(eq(user.username, data.username)).limit(1);

            if (!isEmpty(existingUser) && existingUser[0].id !== id) {
                return NextResponse.json({ message: "username is already taken" }, { status: 409 });
            }
        }

        await db.update(user).set(data).where(eq(user.id, id));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}