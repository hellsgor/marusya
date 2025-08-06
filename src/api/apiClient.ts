import axios, { type AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';
import type { z } from 'zod/v4';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function apiClient<T extends z.ZodType>(
  schema: T,
  config: AxiosRequestConfig,
) {
  let response;

  try {
    response = await api.request(config);
  } catch (error) {
    console.error(`API request failed: ${error}`);

    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }

  const result = schema.safeParse(response.data);

  if (!result.success) {
    const details = result.error.issues
      .map((i) => `— ${i.path.join('.') || '<root>'}: ${i.message}`)
      .join('\n');

    console.error(
      'Response validation failed:',
      `\n${details}`,
      '\n',
      '\nData:\n',
      response.data,
    );
    throw new Error(`Validation failed:\n${details}`);
  }

  return result.data;
}
