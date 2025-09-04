import * as S from './Backdrop.styled';

type BackdropProps = {
  isOpen?: boolean;
  zIndex?: number;
  className?: string;
};

export function Backdrop({
  isOpen = false,
  zIndex = 1000,
  className,
}: BackdropProps) {
  return <S.Root $visible={isOpen} $zIndex={zIndex} className={className} />;
}
