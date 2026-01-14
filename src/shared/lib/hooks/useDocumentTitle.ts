import { APP_TITLE } from '@/shared/config';
import { useEffect } from 'react';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${APP_TITLE}` : APP_TITLE;

    return () => {
      document.title = APP_TITLE;
    };
  }, [title]);
}
