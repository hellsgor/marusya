import clsx from 'clsx';
import st from './Loader.module.scss';

interface LoaderPops {
  size?: 'big' | 'medium' | 'small';
}

export function Loader({ size = 'medium' }: LoaderPops) {
  return <div className={clsx(st.loader, st[`loader_${size}`])}></div>;
}
