import { formatFirstLetter } from '.';

export function getTitle(str: string, dictionary: Record<string, string>) {
  return formatFirstLetter(str && dictionary[str] ? dictionary[str] : str);
}
