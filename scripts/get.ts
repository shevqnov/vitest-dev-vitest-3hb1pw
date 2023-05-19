export function get(obj: object, path: string): unknown {
  const keySequence = path.split('.');
  return getNested(keySequence, obj);
}

function getNested(keySeq: string[], nested: unknown): unknown {
  if (keySeq.length === 0) return nested;

  const [path, ...rest] = keySeq;

  if (nested[path] !== undefined) {
    return getNested(rest, nested[path]);
  }

  return undefined;
}
