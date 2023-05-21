export function merge(
  al: number[],
  bl: number[],
  result: number[] = []
): number[] {
  const [ah, ...ar] = al;
  const [bh, ...br] = bl;

  if (ah === undefined || bh === undefined) return result.concat(al, bl);

  if (ah < bh) {
    return merge(ar, bl, [...result, ah]);
  } else if (bh < ah) {
    return merge(al, br, [...result, bh]);
  }
  return merge(ar, br, [...result, ah, bh]);
}
