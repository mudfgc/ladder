import SignOut from "@/components/auth/sign-out";
import UpdateAccountForm from "./update-form";
import { authenticate } from "@/lib/session";

export default async function Account() {
  const session = await authenticate()

  return (
    <main className="p-4 space-y-2">
      <UpdateAccountForm user={session.user} />
      <SignOut />
    </main>
  )
}
