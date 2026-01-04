import type { MovieModel } from '@/entities/movie';

import { getRuGenreName } from '@/entities/genre/@x/movie';

import { MetaItem } from '@/shared/ui';
import { formatRuntime } from '../../lib';

export type MetaItemsProps = Pick<
  MovieModel,
  'releaseYear' | 'genres' | 'runtime'
>;

export function MetaItems({ genres, releaseYear, runtime }: MetaItemsProps) {
  return (
    <>
      {[
        releaseYear,
        ...genres.map((genre) => getRuGenreName(genre)),
        formatRuntime(runtime),
      ]
        .filter((item) => item && item !== null)
        .map((item, idx) => (
          <MetaItem text={`${item}`} key={idx} />
        ))}
    </>
  );
}
