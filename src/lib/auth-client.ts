import { createAuthClient } from "better-auth/react"

const { signIn: defaultSignIn, useSession, signOut, getSession } = createAuthClient()

const signIn = async () => {
  await defaultSignIn.social({
    provider: "google",
    callbackURL: "/account",
  })
}

export { useSession, signIn, signOut, getSession }
