import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { isEmpty } from "lodash"
import { updateUser } from "@/lib/auth-client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await db.select().from(user).where(eq(user.id, params.id)).limit(1);

        if (!data || isEmpty(data)) {
            return NextResponse.json(
                { error: "user not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            user: data[0]
        });
    } catch (error) {
        return NextResponse.json(
            { error },
            { status: 500 }
        );
    }
}