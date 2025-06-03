import { betterAuth, User } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { customSession } from "better-auth/plugins";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { nanoid } from "nanoid";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }
  },
  user: {
    additionalFields: {
      username: {
        type: "string"
      }
    }
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user: User) => {
          const random = nanoid(6);
          const username = `${user.email.split("@")[0]}_${random}`;

          return {
            data: {
              ...user,
              username
            }
          };
        },
      }
    }
  },
  plugins: [
    nextCookies(),
    customSession(async ({ user, session }) => {
      return {
        user: {
          username: "",
          ...user
        },
        session
      };
    }),
  ]
});
