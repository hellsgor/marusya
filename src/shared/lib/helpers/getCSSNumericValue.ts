type GetCSSNumericValueProps = {
  el?: HTMLElement;
  computedStyles?: CSSStyleDeclaration;
  property: Extract<keyof CSSStyleDeclaration, string>;
};

export function getCSSNumericValue({
  el,
  computedStyles,
  property,
}: GetCSSNumericValueProps): number {
  const styles = el ? getComputedStyle(el) : computedStyles;

  if (!styles) {
    throw new Error('Either el or computedStyles must be provided');
  }

  const value = String(styles[property]);
  const numericValue = parseFloat(value);

  if (value.includes('s') && !value.includes('ms')) {
    return numericValue * 1000;
  }

  return numericValue;
}
