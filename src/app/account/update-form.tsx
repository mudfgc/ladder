"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "better-auth"
import { updateUser } from "@/lib/auth-client"
import { useMutation } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2).max(50),
})

export default function UpdateAccountForm({ user }: { user: User }) {
    const mutation = useMutation({
        mutationKey: ["user", user.id],
        mutationFn: (values: z.infer<typeof formSchema>) => updateUser(values),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: user
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-2xs">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>name</FormLabel>
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
