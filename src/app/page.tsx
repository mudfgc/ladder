"use client"

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "@/lib/auth-client";
import { Fragment } from "react";

export default function Home() {
  const session = useSession();

  function handleSignOut() {
    signOut({ fetchOptions: {} })
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      {session.isPending || !session.data ? (
        <Fragment>
          <Button onClick={signIn}>sign in</Button>
        </Fragment>
      ) : (
        <Fragment>
          <p>hello {session.data.user.name}</p>
          <Button onClick={handleSignOut}>sign out</Button>
        </Fragment>
      )}
    </div>
  );
}
