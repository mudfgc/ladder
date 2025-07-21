"use client"

import { User } from "@/lib/session";
import { trpc } from "../_trpc/client";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function Rankings() {
    const { data } = trpc.users.get.useQuery()

    const table: { user: User }[] = data?.map((item) => ({
        user: {
            ...item,
            createdAt: new Date(item.createdAt),
            updatedAt: new Date(item.updatedAt)
        }
    })) ?? [];

    return (
        <div className="p-4 space-y-4 max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold">rankings</h1>
            <DataTable columns={columns} data={table} />
        </div>
    )
}