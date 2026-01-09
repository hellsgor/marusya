import s from './MoviesSlider.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';
import type { ComponentProps, ComponentType } from 'react';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import { MovieCard } from '../movie-card';
import { SWIPER_NORMALIZE } from '@/shared/config';

type MoviesSliderProps = {
  items: MoviesModel;
  className?: string;
  withRatingPlace?: boolean;
  CardComponent?: ComponentType<ComponentProps<typeof MovieCard>>;
};

export function MoviesSlider({
  items,
  className,
  withRatingPlace = false,
  CardComponent = MovieCard,
}: MoviesSliderProps) {
  return (
    <Swiper
      className={clsx(s.moviesSlider, className)}
      spaceBetween={40}
      slidesPerView={'auto'}
      wrapperTag="ul"
      wrapperClass={s.moviesSlider__wrapper}
      modules={[FreeMode]}
      {...SWIPER_NORMALIZE}
    >
      {items.map(({ id, posterUrl, title }, idx) => (
        <SwiperSlide key={id} className={s.moviesSlider__slide} tag="li">
          <CardComponent
            id={id}
            posterUrl={posterUrl}
            title={title}
            ratingPlace={withRatingPlace ? idx + 1 : undefined}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
