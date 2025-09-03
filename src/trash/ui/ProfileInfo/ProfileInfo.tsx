import type { ReactNode } from 'react';
import st from './ProfileInfo.module.scss';

interface ProfileInfoProps {
  markerContent: ReactNode;
  label: string;
  content: string;
}

export function ProfileInfo({
  markerContent,
  label,
  content,
}: ProfileInfoProps) {
  return (
    <div className={st.profileInfo}>
      <div className={st.profileInfo__marker}>{markerContent}</div>
      <div className={st.profileInfo__wrapper}>
        <span className={st.profileInfo__label}>{label}</span>
        <p className={st.profileInfo__content}>{content}</p>
      </div>
    </div>
  );
}
