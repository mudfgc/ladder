"use client"

import { signIn } from "@/lib/auth-client"
import { Button } from "../ui/button"

export default function SignIn() {
  return <Button onClick={signIn}>sign in</Button>
}
