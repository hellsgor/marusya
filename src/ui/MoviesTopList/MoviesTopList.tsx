import st from './MoviesTopList.module.scss';
import 'swiper/swiper-bundle.css';

import type { UseQueryResult } from '@tanstack/react-query';
import type { MoviesModel } from '../../models/Movie';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

interface MoviesTopListProps {
  query: UseQueryResult<MoviesModel | undefined>;
  isIndexes?: boolean;
  isSlider?: boolean;
}

export function MoviesTopList({
  query: { data, isPending, isError },
  isIndexes,
  isSlider,
}: MoviesTopListProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const cards = data
    ? data.map((movie, index) => (
        <MovieCard
          key={movie.id}
          href={`/${movie.id}`}
          poster={movie.posterUrl || undefined}
          alt={`${movie.title} poster`}
          place={isIndexes ? index + 1 : undefined}
          className={st.moviesTopList__item}
        />
      ))
    : undefined;

  if (isPending) {
    return <Loader />;
  }

  if (!cards || !cards.length || isError) {
    return <span>Что-то пошло не так. Попробуйте перезагрузить страницу.</span>;
  }

  return (
    <div className={st.moviesTopList}>
      <div className={st.moviesTopList__list}>
        {isMobile && isSlider ? (
          <Swiper
            spaceBetween={40}
            slidesPerView={'auto'}
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode]}
            className={st.moviesTopList__slider}
          >
            {cards.map((card, idx) => (
              <SwiperSlide
                key={data![idx].id}
                className={st.moviesTopList__sliderSlide}
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
