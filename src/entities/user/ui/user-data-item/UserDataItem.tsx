import type { ReactNode } from 'react';
import s from './UserDataItem.module.scss';

type UserDataItemProps = {
  markerContent: ReactNode;
  label: string;
  value: string;
};

export function UserDataItem({
  label,
  markerContent,
  value,
}: UserDataItemProps) {
  return (
    <div className={s.userDataItem}>
      <div className={s.userDataItem__marker}>{markerContent}</div>
      <div className={s.userDataItem__wrapper}>
        <span className={s.userDataItem__label}>{label}</span>
        <span className={s.userDataItem__value}>{value}</span>
      </div>
    </div>
  );
}
