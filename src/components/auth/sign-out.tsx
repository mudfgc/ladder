"use client"

import { signOut } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function SignOut() {
  async function handleSignOut() {
    await signOut().then(() => redirect("/"));
  }

  return <Button onClick={handleSignOut}>sign out</Button>
}
