"use client"

import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/session";
import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export default function DestroyUser({ user }: { user: User }) {
    const router = useRouter()

    const mutation = trpc.user.destroy.useMutation({
        onSuccess: () => {
            signOut()
            router.push("/")
        }
    })

    function handleClick() {
        mutation.mutate({ id: user.id })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex" variant="destructive">delete my account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        this action cannot be undone.
                        this will permanently delete your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="destructive" onClick={handleClick} disabled={mutation.isPending}>
                            {mutation.isPending ? <Loader2 className="animate-spin" /> : "continue"}
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}