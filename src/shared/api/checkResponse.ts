import type z from 'zod/v4';

export function checkResponse<T extends z.ZodTypeAny>(
  response: unknown,
  schema: T,
  error: string,
  callback?: (data: z.infer<T>) => z.infer<T>,
): z.infer<T> {
  const result = schema.safeParse(response);

  if (!result.success) {
    throw new Error(`${error}: ${result.error}`);
  }

  return callback ? callback(result.data) : result.data;
}
