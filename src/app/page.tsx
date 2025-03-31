import { getSession } from "@/lib/auth-client";
import { headers } from "next/headers";

export default async function Home() {
  const { data: session } = await getSession({
    fetchOptions: {
      headers: await headers()
    }
  });

  return (
    <div className="p-4">
      {session ? <p>hello {session.user.name}</p> : <p>not connected</p>}
    </div>
  );
}
