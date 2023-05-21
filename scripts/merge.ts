export function merge(
  al: number[],
  bl: number[],
  result: number[] = []
): number[] {
  const [ah, ...at] = al;
  const [bh, ...bt] = bl;

  if (ah === undefined || bh === undefined) return result.concat(al, bl);

  if (ah < bh) {
    return merge(at, bl, [...result, ah]);
  } else if (bh < ah) {
    return merge(al, bt, [...result, bh]);
  }
  return merge(at, bt, [...result, ah, bh]);
}
