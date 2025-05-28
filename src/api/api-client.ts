import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';
import type { z } from 'zod/v4';
import { ZodError } from 'zod/v4';

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
  try {
    const response = await api.request(config);
    return schema.parse(response.data);
  } catch (e) {
    if (e instanceof ZodError) {
      throw new Error(
        `Validation failed: ${e.issues.map((i) => i.message).join(', ')}`,
      );
    }
  }
}
