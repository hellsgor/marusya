import { StyledLoader } from './Loader.styled';
import type { LoaderSize } from './types';

type LoaderProps = {
  size?: LoaderSize;
  fixed?: boolean;
};

export function Loader({ size = 'medium', fixed = false }: LoaderProps) {
  return <StyledLoader $size={size} $fixed={fixed} />;
}
