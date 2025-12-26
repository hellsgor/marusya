import s from './MetaItemsRow.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../model/types';
import type { MetaItemsProps } from '../meta-items';

import { MetaItems } from '../meta-items';
import { Rating } from '../rating';

type MetaItemsRowProps = MetaItemsProps &
  Pick<MovieModel, 'tmdbRating'> & { className?: string };

export function MetaItemsRow({
  tmdbRating,
  className,
  ...props
}: MetaItemsRowProps) {
  return (
    <div className={clsx(s.metaItemsRow, className)}>
      <Rating rate={tmdbRating ?? 0} />
      <MetaItems {...props} />
    </div>
  );
}
