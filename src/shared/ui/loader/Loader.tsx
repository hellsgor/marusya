import clsx from 'clsx';
import s from './loader.module.scss';
import type { LoaderSize } from './types';

type LoaderProps = {
  size?: LoaderSize;
  fixed?: boolean;
};

export function Loader({ size, fixed = false }: LoaderProps) {
  // return <StyledLoader $size={size} $fixed={fixed} />;
  return (
    <div
      className={clsx(
        s.loader,
        {
          [s.loader_small]: size === 'small',
          [s.loader_big]: size === 'big',
        },
        fixed && s.loader_fixed,
      )}
    ></div>
  );
}
