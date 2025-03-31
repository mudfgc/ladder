"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import SignIn from "./auth/sign-in";
import MyAccount from "./auth/my-account";

export default function Header() {
  const { data: session, isPending } = useSession();

  return (
    <header className="min-h-14 flex items-center justify-between gap-4 max-w-7xl mx-auto px-4">
      <Button asChild variant="link">
        <Link href="/">@mud/ladder</Link>
      </Button>
      {!isPending && (session ? <MyAccount {...session.user} /> : <SignIn />)}
    </header>
  )
}
