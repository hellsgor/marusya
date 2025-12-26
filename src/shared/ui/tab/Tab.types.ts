import type { Icon } from '../icon';

export type TabType = {
  text?:
    | string
    | {
        desktop: string;
        mobile: string;
      };
  icon?: keyof typeof Icon;
};
