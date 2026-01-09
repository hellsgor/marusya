export type EnvConfig = {
  API_URL: string;
};

export const ENV_CONFIG = {
  API_URL: import.meta.env.VITE_API_URL,
};
