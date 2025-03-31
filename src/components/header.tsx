"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import SignOut from "./auth/sign-out";
import SignIn from "./auth/sign-in";

export default function Header() {
  const { data: session, isPending } = useSession();

  return (
    <header className="min-h-14 flex items-center justify-between gap-4 max-w-7xl mx-auto px-4">
      <Button asChild variant="link">
        <Link href="/">@mud/ladder</Link>
      </Button>
      {!isPending && (session ? <SignOut /> : <SignIn />)}
    </header>
  )
}
