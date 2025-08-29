import { useGenres } from '../../hooks/useGenres';
import { ErrorText } from '../../ui/ErrorText/ErrorText';
import { GenreCard } from '../../ui/GenreCard/GenreCard';
import { Loader } from '../../ui/Loader/Loader';
import st from './GenresList.module.scss';

export function GenresList() {
  const { data, isFetching, isError } = useGenres();

  return (
    <div className={st.genresList}>
      {(isFetching || !data?.length) && <Loader size="big" />}

      {isError && <ErrorText errorKey="e001" />}

      <ul className={st.genresList__wrapper}>
        {data &&
          data.map((genre) => (
            <li key={genre.name} className={st.genresList__item}>
              <GenreCard
                href={`/genres/${genre.name}`}
                title={genre.nameRu ?? genre.name}
                poster={genre.image ?? undefined}
                alt={`${genre.name} poster`}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
