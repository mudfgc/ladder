import { createAuthClient } from "better-auth/react"

const { signIn: defaultSignIn, useSession, signOut, getSession } = createAuthClient()

const signIn = async () => {
  return await defaultSignIn.social({
    provider: "google"
  })
}

export { useSession, signIn, signOut, getSession }
