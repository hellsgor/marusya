import s from './MoviesSlider.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';
import type { ComponentProps, ComponentType } from 'react';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import { MovieCard } from '../movie-card';

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
      grabCursor={true}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumRatio: 1.2,
        momentumVelocityRatio: 1.1,
        sticky: false,
        momentumBounce: true,
        momentumBounceRatio: 1,
        minimumVelocity: 0.02,
      }}
      modules={[FreeMode]}
      wrapperClass={s.moviesSlider__wrapper}
      wrapperTag="ul"
      touchStartPreventDefault={false}
      touchMoveStopPropagation={true}
      touchReleaseOnEdges={true}
      threshold={0}
      touchAngle={45}
      resistanceRatio={0.85}
      shortSwipes={true}
      longSwipes={true}
      longSwipesRatio={0.3}
      longSwipesMs={150}
      followFinger={true}
      touchRatio={1}
      passiveListeners={false}
      updateOnWindowResize={true}
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
