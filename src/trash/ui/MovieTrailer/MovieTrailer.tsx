import st from './MovieTrailer.module.scss';
import type { MovieModel } from '../../models';

import ReactPlayer from 'react-player';

export type MovieTrailerProps = {
  url: MovieModel['trailerUrl'];
  playing: boolean;
};

export function MovieTrailer({ url, playing }: MovieTrailerProps) {
  return (
    <div className={st.movieTrailer}>
      <div className={st.movieTrailer__frame}>
        <ReactPlayer
          src={url ?? undefined}
          width={'100%'}
          height={'100%'}
          config={{
            youtube: {
              controls: 1,
              modestbranding: 1,
              rel: 0,
              iv_load_policy: 3,
              fs: 0,
              disablekb: 1,
              enablejsapi: 1,
            },
          }}
          playing={playing}
        />
      </div>
    </div>
  );
}
