import s from './SearchMobileView.module.scss';
import clsx from 'clsx';

import { Icon, Modal, MODAL_TYPES } from '@/shared/ui';

import { useEffect, useRef, useState } from 'react';
import { SearchControl } from '../search-control';

type SearchMobileViewProps = {
  className?: string;
};

export function SearchMobileView({ className }: SearchMobileViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isVisible && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  }, [isVisible]);

  return (
    <div className={clsx(s.searchMobileView, className)}>
      <button
        className={s.searchMobileView__button}
        onClick={() => {
          setIsVisible(true);
        }}
      >
        <Icon.Search />
      </button>

      {isVisible && (
        <Modal
          type={MODAL_TYPES.EMPTY}
          onClose={() => {
            setIsVisible(false);
          }}
          className={s.searchMobileView__modal}
        >
          <SearchControl ref={searchInputRef} />
        </Modal>
      )}
    </div>
  );
}
