"use client"

import { signIn } from "@/lib/auth-client"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"

export default function SignIn() {
  return (
    <Button onClick={signIn}>
      <LogIn />
      sign in
    </Button>
  )
}
