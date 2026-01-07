import type { MoviesModel } from '@/entities/movie';
import s from './ResultsSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { SWIPER_NORMALIZE } from '@/shared/config';
import { FreeMode } from 'swiper/modules';
import { SearchResult } from '../search-result';

type ResultsSliderProps = {
  results: MoviesModel | undefined;
  className?: string;
};

export function ResultsSlider({ results, className }: ResultsSliderProps) {
  return (
    <Swiper
      className={clsx(s.resultsSlider, className)}
      spaceBetween={16}
      slidesPerView={'auto'}
      wrapperTag="ul"
      wrapperClass={s.resultsSlider__wrapper}
      modules={[FreeMode]}
      {...SWIPER_NORMALIZE}
    >
      {results?.map((result) => (
        <SwiperSlide
          key={result.id}
          className={s.resultsSlider__slide}
          tag="li"
        >
          <SearchResult data={result} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
