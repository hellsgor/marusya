import z from 'zod/v4';

export const GenreDTOSchema = z.string();
export type GenreDTO = z.infer<typeof GenreDTOSchema>;

export const GenresDTOSchema = z.array(GenreDTOSchema);
export type GenresDTO = z.infer<typeof GenresDTOSchema>;
