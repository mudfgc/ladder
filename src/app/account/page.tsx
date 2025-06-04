import SignOut from "@/components/auth/sign-out";
import UpdateAccountForm from "./components/update-form";
import { authenticate } from "@/lib/session";
import DestroyUser from "./components/destroy";

export default async function Account() {
  const session = await authenticate()

  return (
    <main className="p-4 space-y-2 space-x-2">
      <UpdateAccountForm user={session.user} />
      <SignOut />
      <DestroyUser user={session.user} />
    </main>
  )
}
