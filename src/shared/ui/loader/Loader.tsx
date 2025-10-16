import { StyledLoader } from './Loader.styled';
import type { LoaderSize } from './types';

type LoaderProps = {
  size?: LoaderSize;
};

export function Loader({ size = 'medium' }: LoaderProps) {
  return <StyledLoader $size={size} />;
}
