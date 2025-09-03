import { LANGUAGES, MOVIE_PROPERTIES_RU } from '../../constants';
import { getTitle } from '../../helpers';
import type { MovieModel } from '../../models';
import st from './MovieAbout.module.scss';

interface MovieAboutProps {
  data: Pick<
    MovieModel,
    | 'language'
    | 'budget'
    | 'revenue'
    | 'director'
    | 'production'
    | 'awardsSummary'
  >;
}

function formatValue(
  key: keyof MovieAboutProps['data'],
  value: MovieAboutProps['data'][keyof MovieAboutProps['data']],
) {
  if (!value) {
    return value;
  }

  switch (key) {
    case 'language':
      return getTitle(value, LANGUAGES);
    case 'budget':
    case 'revenue':
      return `${Number(value).toLocaleString('ru-RU')} руб.`;
    default:
      return value;
  }
}

export function MovieAbout({ data }: MovieAboutProps) {
  return (
    <>
      <h2 className="heading heading_2">О фильме</h2>
      <div className={st.movieAbout}>
        {data &&
          Object.entries(data)
            .filter((item) => item[1])
            .map((item) => (
              <div key={item[0]} className={st.movieAbout__item}>
                <p>
                  <span>{getTitle(item[0], MOVIE_PROPERTIES_RU)}</span>
                </p>

                <span>
                  {formatValue(
                    item[0] as keyof MovieAboutProps['data'],
                    item[1],
                  )}
                </span>
              </div>
            ))}
      </div>
    </>
  );
}
