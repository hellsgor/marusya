import type { Icon } from '@/shared/ui/icon';

export type TabType = {
  text?:
    | string
    | {
        desktop: string;
        mobile: string;
      };
  icon?: keyof typeof Icon;
};
