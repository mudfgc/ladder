import { createAuthClient } from "better-auth/react"
import { customSessionClient } from "better-auth/client/plugins";
import type { auth } from "@/lib/auth";

const { signIn: defaultSignIn, useSession, signOut, getSession, updateUser } = createAuthClient({
  plugins: [customSessionClient<typeof auth>()],
})

const signIn = async () => {
  await defaultSignIn.social({
    provider: "google",
    callbackURL: "/account",
  })
}

export { useSession, signIn, signOut, getSession, updateUser }
