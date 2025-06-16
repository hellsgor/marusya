import { MOVIE_PROPERTIES_RU } from '../../constants';
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

export function MovieAbout({ data }: MovieAboutProps) {
  return (
    <>
      <h2 className="heading heading_2">О фильме</h2>
      <div className={st.movieAbout}>
        {data &&
          Object.entries(data).map((item) => (
            <div
              key={item[0]}
              className={`${st.movieAbout__item} ${st.movieAbout__item}_${item[0]}`}
            >
              <p>
                <span className={st.movieAbout__key}>
                  {getTitle(item[0], MOVIE_PROPERTIES_RU)}
                </span>
              </p>

              <span className={st.movieAbout__value}>{item[1]}</span>
            </div>
          ))}
      </div>
    </>
  );
}
