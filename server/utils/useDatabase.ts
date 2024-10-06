import { createClient } from '@libsql/client/http';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';

export * as tables from '~/server/database/schema';

let database: LibSQLDatabase | null = null;

export const useDatabase = () => {
  const { tursoDBURL, tursoDBToken } = useRuntimeConfig();

  if (tursoDBToken && tursoDBURL) {
    database = drizzle(
      createClient({
        url: tursoDBURL,
        authToken: tursoDBToken,
      }),
    );
  }

  return database;
};
