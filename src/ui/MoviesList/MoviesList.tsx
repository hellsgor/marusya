import st from './MoviesList.module.scss';
import 'swiper/swiper-bundle.css';

import type { MoviesModel } from '../../models';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MovieCard } from '../MovieCard/MovieCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { BREAKPOINTS } from '../../constants';

interface MoviesListProps {
  data: MoviesModel | undefined;
  isIndexes?: boolean;
  isSlider?: boolean;
}

export function MoviesList({ data, isIndexes, isSlider }: MoviesListProps) {
  const isMobile = useMediaQuery(BREAKPOINTS.md);

  const cards = data
    ? data.map((movie, index) => (
        <MovieCard
          key={movie.id}
          href={`/movies/${movie.id}`}
          poster={movie.posterUrl || undefined}
          alt={`${movie.title} poster`}
          place={isIndexes ? index + 1 : undefined}
          className={st.moviesList__item}
        />
      ))
    : [];

  return (
    <div className={st.moviesList}>
      <div className={st.moviesList__list}>
        {isMobile && isSlider ? (
          <Swiper
            spaceBetween={40}
            slidesPerView={'auto'}
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode]}
            className={st.moviesList__slider}
          >
            {cards.map((card, idx) => (
              <SwiperSlide
                key={data![idx].id}
                className={st.moviesList__sliderSlide}
              >
                {card}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          cards
        )}
      </div>
    </div>
  );
}
