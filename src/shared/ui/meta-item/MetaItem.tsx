import s from './MetaItem.module.scss';
import clsx from 'clsx';

type MetaItemProps = {
  className?: string;
  text: string;
};

export function MetaItem({ text, className }: MetaItemProps) {
  return <span className={clsx(s.metaItem, className)}>{text}</span>;
}
