export function formatFirstLetter(str: string | undefined) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}
