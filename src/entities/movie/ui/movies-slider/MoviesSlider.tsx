import s from './MoviesSlider.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import { MovieCard } from '../movie-card';

type MoviesSliderProps = {
  items: MoviesModel;
  className?: string;
  isTop10?: boolean;
};

export function MoviesSlider({ items, className, isTop10 }: MoviesSliderProps) {
  return (
    <Swiper
      className={clsx(s.moviesSlider, className)}
      spaceBetween={40}
      slidesPerView={'auto'}
      grabCursor={true}
      freeMode={true}
      modules={[FreeMode]}
      wrapperClass={s.moviesSlider__wrapper}
      wrapperTag="ul"
    >
      {items.map(({ id, posterUrl, title }, idx) => (
        <SwiperSlide key={id} className={s.moviesSlider__slide} tag="li">
          <MovieCard
            {...{ id, posterUrl, title }}
            ratingPlace={isTop10 ? idx + 1 : undefined}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
