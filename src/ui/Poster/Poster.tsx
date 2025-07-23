import { useEffect, useState } from 'react';
import st from './Poster.module.scss';
import clsx from 'clsx';

interface PosterProps {
  src?: string;
  alt?: string;
}

export function Poster({ src, alt }: PosterProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setLoaded(false);
    }
  }, [src]);

  return (
    <div className={clsx(st.poster, loaded ? st.poster_loaded : null)}>
      <img src={src ?? ''} alt={alt} onLoad={() => setLoaded(true)} />
    </div>
  );
}
