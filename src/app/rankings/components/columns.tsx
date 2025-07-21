"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/lib/session"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<{ user: User }>[] = [
    {
        id: "user",
        header: "",
        accessorKey: "user",
        cell: ({ getValue }) => {
            const user = getValue() as User
            return (
                <div className="flex items-center gap-2 text-sm min-h-10">
                    {user.image && (
                        <Avatar className="size-6">
                            <AvatarImage src={user.image} alt={user.name} />
                        </Avatar>
                    )}
                    <p>{user.username}</p>
                </div>
            )
        },
        filterFn: (row, columnId, filterValue) => {
            const user = row.getValue(columnId) as User;
            return user.username.toLowerCase().includes(filterValue.toLowerCase());
        },
    },
]