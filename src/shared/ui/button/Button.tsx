import * as StyledButton from './Button.styled';
import type { ButtonProps, PropsAsLink } from './types';

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    wide = false,
    smallPaddings = false,
    className,
    href,
    to,
    type = 'button',
    ...restProps
  } = props;

  const commonProps = {
    $variant: variant,
    $wide: wide,
    $smallPaddings: smallPaddings,
    className,
  };

  if (to) {
    const linkProps = props as PropsAsLink;
    return (
      <StyledButton.LinkRoot {...commonProps} {...linkProps}>
        {children}
      </StyledButton.LinkRoot>
    );
  }

  return (
    <StyledButton.Root
      {...commonProps}
      href={href}
      as={href ? 'a' : 'button'}
      type={href ? undefined : type}
      {...restProps}
    >
      {children}
    </StyledButton.Root>
  );
}
