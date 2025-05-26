import React from 'react';
import * as Icons from '../icons';

export type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const Svg = Icons[name];
  if (!Svg) {
    console.warn(`Icon "${name}" не найдена в списке`);
    return null;
  }
  return <Svg width={size} height={size} {...props} />;
};
