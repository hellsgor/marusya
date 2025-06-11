import z from 'zod/v4';

export const GenreSchema = z.string();
export type Genre = z.infer<typeof GenreSchema>;

export const GenresSchema = z.array(GenreSchema);
export type Genres = z.infer<typeof GenreSchema>;
