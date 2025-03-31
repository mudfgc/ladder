"use client"

import { signOut } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function SignOut() {
  function handleSignOut() {
    signOut({
      fetchOptions: {
        onSuccess: () => redirect("/")
      }
    })
  }

  return (
    <Button onClick={handleSignOut}>sign out</Button>
  )
}
