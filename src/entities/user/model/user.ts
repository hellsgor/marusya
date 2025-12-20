import { z } from 'zod/v4';

export const UserDTOSchema = z.object({
  favorite: z.array(z.string()).optional().default([]),
  surname: z.string(),
  name: z.string(),
  email: z.email(),
});

export type User = z.infer<typeof UserDTOSchema>;
