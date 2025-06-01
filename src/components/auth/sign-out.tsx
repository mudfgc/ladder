"use client"

import { signOut } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react"

export default function SignOut() {
  async function handleSignOut() {
    await signOut().then(() => redirect("/"));
  }

  return (
    <Button onClick={handleSignOut} variant="destructive">
      sign out
      <LogOut />
    </Button>
  )
}
