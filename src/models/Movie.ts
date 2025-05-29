import { z } from 'zod/v4';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.nullable(z.number()),
  releaseDate: z.nullable(z.coerce.date()),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number().nonnegative(),
  budget: z.nullable(z.string()),
  revenue: z.nullable(z.string()),
  homepage: z.union([z.url(), z.literal('')]),
  status: z.string(),
  posterUrl: z.nullable(z.url()),
  backdropUrl: z.nullable(z.url()),
  trailerUrl: z.nullable(z.url()),
  trailerYouTubeId: z.string(),
  tmdbRating: z.number().nonnegative(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.nullable(z.string()),
  production: z.nullable(z.string()),
  awardsSummary: z.nullable(z.string()),
});

export const MoviesSchema = z.array(MovieSchema);

export type MovieModel = z.infer<typeof MovieSchema>;
export type MoviesModel = z.infer<typeof MoviesSchema>;
