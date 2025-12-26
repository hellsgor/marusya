import s from './Tab.module.scss';
import clsx from 'clsx';

import type { TabType } from './Tab.types';

import { useMediaQuery } from '@/shared/lib';

import { Icon } from '@/shared/ui/icon';

type TabProps = TabType & { className?: string; disabled?: boolean };

export function Tab({ text, icon, className, disabled }: TabProps) {
  const isMobile = useMediaQuery('md');

  const IconComponent = icon ? Icon[icon] : null;
  const currentText =
    (typeof text === 'string'
      ? text
      : isMobile
        ? text?.mobile
        : text?.desktop) ?? null;

  return (
    <button
      type="button"
      className={clsx(s.tab, className)}
      disabled={disabled}
    >
      {IconComponent && <IconComponent className={s.tab__icon} />}
      {currentText && <span className={s.tab__text}>{currentText}</span>}
      {!IconComponent && !currentText && 'Some tab'}
    </button>
  );
}
