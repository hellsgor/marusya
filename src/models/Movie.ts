import { z } from 'zod/v4';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.number(),
  releaseDate: z.iso.date(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number().nonnegative(),
  budget: z.union([z.string(), z.null()]),
  revenue: z.union([z.string(), z.null()]),
  homepage: z.union([z.url(), z.literal('')]),
  status: z.string(),
  posterUrl: z.union([z.url(), z.null()]),
  backdropUrl: z.union([z.url(), z.null()]),
  trailerUrl: z.union([z.url(), z.null()]),
  trailerYouTubeId: z.string(),
  tmdbRating: z.number().nonnegative(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.union([z.string(), z.null()]),
  production: z.union([z.string(), z.null()]),
  awardsSummary: z.union([z.string(), z.null()]),
});

export const MoviesSchema = z.array(MovieSchema);

export type MovieModel = z.infer<typeof MovieSchema>;
export type MoviesModel = z.infer<typeof MoviesSchema>;
