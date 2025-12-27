import s from './MovieDescription.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../../../model/types';

import { Spoiler } from '@/shared/ui';

type MovieDescriptionProps = {
  text: MovieModel['plot'];
  className?: string;
};

export function MovieDescription({ text, className }: MovieDescriptionProps) {
  return (
    <Spoiler max={4} className={clsx(s.movieDescription, className)}>
      <p>{text}</p>
    </Spoiler>
  );
}
