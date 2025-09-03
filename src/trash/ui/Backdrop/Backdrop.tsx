import clsx from 'clsx';
import st from './Backdrop.module.scss';

export function Backdrop({ className }: { className: string }) {
  return <div className={clsx(st.backdrop, className)}></div>;
}
