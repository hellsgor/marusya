export function getMappedValue(
  str: string,
  dictionary: Record<string, string>,
) {
  return dictionary[str] ?? str;
}
