import * as StyledButton from './Button.styled';
import type { PropsAsButton, PropsAsLink } from './types';

export type ButtonProps = PropsAsButton | PropsAsLink;

export function Button({
  children,
  variant = 'primary',
  wide = false,
  smallPaddings = false,
  className,
  href,
  type = 'button',
  ...restProps
}: ButtonProps) {
  return (
    <StyledButton.Root
      $variant={variant}
      $wide={wide}
      $smallPaddings={smallPaddings}
      className={className}
      href={href}
      as={href ? 'a' : 'button'}
      type={href ? undefined : type}
      {...restProps}
    >
      {children}
    </StyledButton.Root>
  );
}
