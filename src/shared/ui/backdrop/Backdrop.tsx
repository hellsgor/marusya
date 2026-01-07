import clsx from 'clsx';
import s from './Backdrop.module.scss';

type BackdropProps = {
  isVisible?: boolean;
  className?: string;
};

export function Backdrop({ isVisible = false, className }: BackdropProps) {
  return (
    <div
      className={clsx(s.backdrop, isVisible && s.backdrop_visible, className)}
    />
  );
}
