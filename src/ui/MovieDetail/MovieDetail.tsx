import st from './MovieDetail.module.scss';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import Poster from '../Poster/Poster';
import { Heart, Refresh } from '../../ui/icons';
import clsx from 'clsx';
import { ErrorText } from '../ErrorText/ErrorText';
import { useRandomMovie } from '../../hooks/useRandomMovie';

// type MovieDetailType = Pick<
//   MovieModel,
//   | 'id'
//   | 'title'
//   | 'backdropUrl'
//   | 'plot'
//   | 'tmdbRating'
//   | 'releaseYear'
//   | 'genres'
//   | 'runtime'
// >;

interface MovieDetailProps {
  isRefreshable?: boolean;
}

export function MovieDetail({ isRefreshable = false }: MovieDetailProps) {
  const { data, isFetching, isError, refresh } = useRandomMovie();

  if (isFetching) {
    return (
      <div className={clsx(st.movieDetail, st.movieDetail_withLoader)}>
        <Loader size="big" />
      </div>
    );
  }

  if (!data || isError) {
    return <ErrorText errorKey={'e001'} />;
  }

  const {
    id,
    title,
    backdropUrl,
    plot,
    tmdbRating,
    releaseYear,
    genres,
    runtime,
  } = data;

  const runtimeStr = `${Math.trunc(runtime / 60) > 0 ? Math.trunc(runtime / 60) + ' ч ' : ''}${runtime % 60} мин`;

  return (
    <div className={st.movieDetail}>
      <div className={st.movieDetail__details}>
        <div className={st.movieDetail__info}>
          <div className={st.movieDetail__detailsItems}>
            <span>{tmdbRating}</span>
            <span>{releaseYear}</span>
            {genres.map((genre, idx) => (
              <span key={idx}>{genre}</span>
            ))}
            <span>{runtimeStr}</span>
          </div>
          <h1 className={clsx('heading heading_1', st.movieDetail__title)}>
            {title}
          </h1>
          <p className={st.movieDetail__plot}>{plot}</p>
        </div>

        <div className={st.movieDetail__actions}>
          <Button type="button">Трейлер</Button>
          <Button href={`/movies/${id}`} variant="secondary">
            О фильме
          </Button>
          <Button type="button" variant="secondary" smallPaddings={true}>
            <Heart />
          </Button>
          {isRefreshable && (
            <Button
              type="button"
              variant="secondary"
              smallPaddings={true}
              onClick={refresh}
            >
              <Refresh />
            </Button>
          )}
        </div>
      </div>

      <div className={st.movieDetail__poster}>
        <Poster src={backdropUrl ?? undefined} alt={`${title} poster`} />
      </div>
    </div>
  );
}
