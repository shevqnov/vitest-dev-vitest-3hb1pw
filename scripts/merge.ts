export function merge(
  al: number[],
  bl: number[],
  result: number[] = []
): number[] {
  const [ah, ...at] = al;
  const [bh, ...bt] = bl;

  // If one of the lists is empty, numbers in another garanteed grather then last result number,
  // so we can just concat it!
  if (ah === undefined || bh === undefined) return result.concat(al, bl);

  // Check is a head less then b head, in this case merge a tail with b list,
  // a head goes to result.
  if (ah < bh) {
    return merge(at, bl, [...result, ah]);
    // Otherwise:
  } else if (bh < ah) {
    return merge(al, bt, [...result, bh]);
  }
  // And if heads is equal
  return merge(at, bt, [...result, ah, bh]);
}
