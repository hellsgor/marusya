import { THEME } from '@/shared/config';
import { css } from 'styled-components';

type TransitionType = {
  prop: string;
  durationMs?: number;
  func?: string;
};

export function getTransition(
  propsArray: TransitionType[],
): ReturnType<typeof css> {
  const { duration: defaultDuration, func: defaultFunc } = THEME.transition;

  const entries = propsArray.map(
    ({ prop, durationMs = defaultDuration, func = defaultFunc }) =>
      `${prop} ${durationMs}ms ${func}`,
  );

  return css`
    transition: ${entries.join(', ')};
    will-change: ${propsArray.map(({ prop }) => prop).join(', ')};
  `;
}
