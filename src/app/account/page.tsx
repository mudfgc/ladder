import SignOut from "@/components/auth/sign-out";
import { getSession } from "@/lib/auth-client";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import UpdateAccountForm from "./update-form";

export default async function Account() {
  const { data: session } = await getSession({
    fetchOptions: {
      headers: await headers()
    }
  });

  if (!session) notFound();

  return (
    <main className="p-4 space-y-2">
      <UpdateAccountForm user={session.user} />
      <SignOut />
    </main>
  )
}
