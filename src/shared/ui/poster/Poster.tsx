import { useEffect, useState } from 'react';
import * as S from './Poster.styled';

type PosterProps = {
  src?: string;
  alt?: string;
};

export function Poster({ src, alt }: PosterProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src, setLoaded]);

  return (
    <S.StyledPoster $loaded={loaded}>
      <img src={src} alt={alt} />
    </S.StyledPoster>
  );
}
