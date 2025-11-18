import { useRef } from 'react';
import s from './Poster.module.scss';
import clsx from 'clsx';

type PosterProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export function Poster({ src, alt, className }: PosterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    if (containerRef.current) {
      containerRef.current.dataset.loaded = 'true';
    }
  };

  return (
    <div
      className={clsx(s.poster, className)}
      ref={containerRef}
      data-loaded="false"
    >
      <img src={src} alt={alt} ref={imgRef} onLoad={handleLoad} />
    </div>
  );
}
