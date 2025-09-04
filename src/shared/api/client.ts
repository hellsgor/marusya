import axios, { type AxiosRequestConfig } from 'axios';
import type { z } from 'zod/v4';
import { ENV_CONFIG } from '../config';

const api = axios.create({
  baseURL: ENV_CONFIG.API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function client<T extends z.ZodType>(
  schema: T,
  config: AxiosRequestConfig,
) {
  let response;

  try {
    response = await api.request(config);
  } catch (error) {
    console.error(`API request failed: ${error}`);
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
