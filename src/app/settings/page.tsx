import { authenticate } from "@/lib/session";
import DestroyUser from "./components/destroy-dialog";
import UpdateDialog from "./components/update-dialog";

export default async function Account() {
  const session = await authenticate()

  return (
    <main className="p-4 space-y-2">
      <UpdateDialog user={session.user} />
      <DestroyUser user={session.user} />
    </main>
  )
}
