import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

declare global {
  // eslint-disable-next-line no-var -- only var works here
  var db: PostgresJsDatabase | undefined;
}

let db: PostgresJsDatabase;

if (process.env.NODE_ENV === "production") {
  db = drizzle(postgres(`${process.env.DATABASE_URL}`));
} else {
  if (!global.db) global.db = drizzle(postgres(`${process.env.DATABASE_URL}`));

  db = global.db;
}

export { db };
