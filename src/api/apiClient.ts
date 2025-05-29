import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';
import type { z } from 'zod/v4';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const msg = error.response
      ? `HTTP ${error.response.status}: ${JSON.stringify(error.response.data)}`
      : error.message;

    return Promise.reject(new Error(msg));
  },
);

export async function apiClient<T extends z.ZodType>(
  schema: T,
  config: AxiosRequestConfig,
) {
  let response;

  try {
    response = await api.request(config);
  } catch (e) {
    console.error(`API request failed: ${e}`);
    throw e;
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
