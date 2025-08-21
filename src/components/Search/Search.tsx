import st from './Search.module.scss';
import clsx from 'clsx';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BREAKPOINTS, ERRORS_TEXTS } from '../../constants';

import { useSearch } from '../../hooks/useSearch';
import { debouncer } from '../../helpers/debouncer';

import { queryClient } from '../../api/queryClient';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import { MovieFullCard } from '../../ui/MovieFullCard/MovieFullCard';
import { Loader } from '../../ui/Loader/Loader';
import { SearchIcon } from '../../ui/icons';
import { Backdrop } from '../../ui/Backdrop/Backdrop';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export function Search() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);

  const isMobile = useMediaQuery(BREAKPOINTS.md);
  const isTablet = useMediaQuery(BREAKPOINTS.lg);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSet = useMemo(() => debouncer(setValue, 500), [setValue]);

  const { data, isFetching, isError } = useSearch(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    debouncedSet(value.length >= 3 ? value : '');
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

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleBackdropClick = () => {
    setIsFocused(false);
  };

  const error = useCallback((): Error | undefined => {
    if (data && !data.length) return new Error(ERRORS_TEXTS.e003);
    if (isError) return new Error(ERRORS_TEXTS.e001);
    return undefined;
  }, [data, isError]);

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
      {isTablet && (
        <div className={st.search__icon} onClick={handleIconClick}>
          <SearchIcon />
        </div>
      )}

      <div
        className={clsx(st.search__wrapper, {
          [st.search__wrapper_active]: isFocused,
        })}
        onClick={handleBackdropClick}
      >
        {isTablet && <Backdrop className={st.search__backdrop} />}

        <SearchInput
          placeholder="Поиск"
          name="search-movie"
          onChange={handleInputChange}
          clearButtonCallback={clearData}
          ref={inputRef}
          onClick={(event) => event.stopPropagation()}
          error={error()}
        />

        <Dropdown
          className={clsx(st.search__dropdown)}
          isOpen={!!data?.length && isFocused}
          onClick={() => {
            window.event?.stopPropagation?.();
          }}
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
