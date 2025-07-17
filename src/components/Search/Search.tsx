import st from './Search.module.scss';
import clsx from 'clsx';

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../constants';

import { useSearch } from '../../hooks/useSearch';
import { debouncer } from '../../helpers/debouncer';

import { queryClient } from '../../api/queryClient';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import { MovieFullCard } from '../../ui/MovieFullCard/MovieFullCard';
import { Loader } from '../../ui/Loader/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export function Search() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useMediaQuery(BREAKPOINTS.md);
  const containerRef = useRef<HTMLDivElement>(null);

  const debouncedSet = useMemo(() => debouncer(setValue, 500), [setValue]);

  const { data, isFetching } = useSearch(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value.length >= 3) {
      debouncedSet(value);
    }
  };

  const clearData = () => {
    setValue(undefined);
    queryClient.removeQueries({ queryKey: ['search'], exact: false });
  };

  useEffect(() => {
    const handleFocusChange = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsFocused(false);
      } else {
        setIsFocused(true);
      }
    };

    document.addEventListener('pointerdown', handleFocusChange);

    return () => {
      document.removeEventListener('pointerdown', handleFocusChange);
    };
  }, []);

  const cards = useMemo(
    () =>
      data?.map((item) => (
        <MovieFullCard
          key={item.id}
          genres={item.genres}
          title={item.title}
          releaseYear={item.releaseYear}
          runtime={item.runtime}
          posterUrl={item.posterUrl}
          tmdbRating={item.tmdbRating}
          href={`/movies/${item.id}`}
          alt={`${item.title} poster`}
          isVertical={isMobile}
        />
      )) ?? [],
    [data, isMobile],
  );

  return (
    <div className={st.search} ref={containerRef} tabIndex={0}>
      <div className={st.search__wrapper}>
        <SearchInput
          placeholder="Поиск"
          name="search-movie"
          onChange={handleInputChange}
          clearButtonCallback={clearData}
        />

        <Dropdown
          className={clsx(st.search__dropdown)}
          isOpen={!!data?.length && isFocused}
        >
          {!isMobile ? (
            cards
          ) : (
            <Swiper
              spaceBetween={16}
              slidesPerView={'auto'}
              freeMode={true}
              modules={[FreeMode]}
              className={st.search__slider}
            >
              {cards.map((card, idx) => (
                <SwiperSlide key={data![idx].id} className={st.search__slide}>
                  {card}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Dropdown>

        {isFetching && (
          <div className={st.search__loader}>
            <Loader size="small" />
          </div>
        )}
      </div>
    </div>
  );
}
