"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { trpc } from "../../_trpc/client"
import { update } from "@/schemas/user"
import { User } from "@/lib/session"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = update.shape.payload

export default function UpdateAccountForm({ user }: { user: User }) {

    const mutation = trpc.user.update.useMutation({
        onError: (error) => {
            form.setError("username", { message: error.message })
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: user
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate({ id: user.id, payload: values })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-2xs">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? <Loader2 className="animate-spin" /> : "submit"}
                </Button>
            </form>
        </Form>
    )
}
