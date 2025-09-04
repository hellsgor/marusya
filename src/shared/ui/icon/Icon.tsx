import * as React from 'react';
import { Icons as IconsRaw } from '@/shared/assets';

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;
interface WithSizeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const withSize =
  (Comp: SvgComponent) =>
  ({ size = 24, ...props }: WithSizeProps) => (
    <Comp width={size} height={size} {...props} />
  );

export const Icon = Object.fromEntries(
  Object.entries(IconsRaw).map(([key, Comp]) => [
    key,
    withSize(Comp as SvgComponent),
  ]),
) as Record<keyof typeof IconsRaw, React.FC<WithSizeProps>>;
