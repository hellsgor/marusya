import clsx from 'clsx';
import s from './Loader.module.scss';

type LoaderProps = {
  size?: 'big' | 'small';
  fixed?: boolean;
  className?: string;
};

export function Loader({ size, fixed = false, className }: LoaderProps) {
  return (
    <div
      className={clsx(
        s.loader,
        {
          [s.loader_small]: size === 'small',
          [s.loader_big]: size === 'big',
        },
        fixed && s.loader_fixed,
        className,
      )}
    ></div>
  );
}
