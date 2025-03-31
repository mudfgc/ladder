import SignOut from "@/components/auth/sign-out";
import { getSession } from "@/lib/auth-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Account() {
  const { data: session } = await getSession({
    fetchOptions: {
      headers: await headers()
    }
  });

  if (!session) redirect("/");

  return (
    <main className="p-4 space-y-2">
      <p>hello {session.user.name}</p>
      <SignOut />
    </main>
  )
}
