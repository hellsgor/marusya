import { useRef } from 'react';
import * as S from './Poster.styled';

type PosterProps = {
  src?: string;
  alt?: string;
};

export function Poster({ src, alt }: PosterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    if (containerRef.current) {
      containerRef.current.dataset.loaded = 'true';
    }
  };

  return (
    <S.StyledPoster ref={containerRef} data-loaded="false">
      <img src={src} alt={alt} ref={imgRef} onLoad={handleLoad} />
    </S.StyledPoster>
  );
}
