export function cleanString(str: string, repeats: number): string {
  const map = {};
  const origin = str.split('');
  return cleanStringIter(origin, repeats, map, '');
}

function cleanStringIter(
  origin: string[],
  repeats: number,
  map: Record<string, number>,
  result: string
): string {
  if (origin.length < 1) return result;
  const [l, ...rest] = origin;
  const letterRepeats = map[l] || 0
  if (letterRepeats < repeats)
    return cleanStringIter(
      rest,
      repeats,
      {
        ...map,
        [l]: letterRepeats + 1,
      },
      result.concat(l)
    );

  return cleanStringIter(rest, repeats, map, result);
}
