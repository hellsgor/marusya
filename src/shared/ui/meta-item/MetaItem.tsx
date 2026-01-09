import s from './MetaItem.module.scss';
import clsx from 'clsx';

type MetaItemProps = {
  className?: string;
  isSmall?: boolean;
  text: string;
};

export function MetaItem({ text, isSmall, className }: MetaItemProps) {
  return (
    <span className={clsx(s.metaItem, isSmall && s.metaItem_small, className)}>
      {text}
    </span>
  );
}
