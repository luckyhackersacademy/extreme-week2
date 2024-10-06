import { getAuth } from '#clerk';
import { desc, eq } from 'drizzle-orm';

export default eventHandler(async (event) => {
  const { userId } = getAuth(event);
  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const db = useDatabase();
  if (!db) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

  const generations = await db
    .select()
    .from(tables.generations)
    .where(eq(tables.generations.userId, userId))
    .orderBy(desc(tables.generations.createdAt))
    .offset(0)
    .limit(10000);

  return generations;
});
